#!/usr/bin/env python3
"""Bundle the static export (out/) into one self-contained HTML page for review as a
claude.ai artifact, where people can pin comments on any element.

Every route becomes a hash-routed view (#home, #shop, #shop-small-personal-kit, ...),
CSS is inlined, Next's scripts are dropped, and a small vanilla script re-creates the
motion, mobile menu, Snapshot quiz and form feedback.

Usage: scripts/build-demo.sh && python3 scripts/build-artifact.py > docs/preview/site-preview.html
"""
import glob
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "out")


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def view_id(route):
    route = route.strip("/")
    return route.replace("/", "-") if route else "home"


pages = {}
for path in sorted(glob.glob(os.path.join(OUT, "**", "index.html"), recursive=True)):
    route = "/" + os.path.relpath(os.path.dirname(path), OUT).replace(os.sep, "/")
    route = "/" if route == "/." else route + "/"
    if route.startswith(("/_", "/404")):
        continue
    pages[route] = read(path)

home = pages["/"]
header = re.search(r"<header.*?</header>", home, re.S).group(0)
footer = re.search(r"<footer.*?</footer>", home, re.S).group(0)
css = "\n".join(read(p) for p in glob.glob(os.path.join(OUT, "_next/static/css/*.css")))


def clean(html):
    html = re.sub(r"<script\b.*?</script>", "", html, flags=re.S)
    html = re.sub(r"<template\b.*?</template>", "", html, flags=re.S)
    html = re.sub(r"<!--.*?-->", "", html, flags=re.S)
    # The artifact viewer can't frame other sites, so videos become links out to Vimeo.
    html = re.sub(
        r'<iframe[^>]*src="https://player\.vimeo\.com/video/(\d+)[^"]*"[^>]*title="([^"]*)"[^>]*></iframe>',
        r'<a href="https://vimeo.com/\1" target="_blank" rel="noopener" class="flex h-full w-full flex-col items-center justify-center gap-3 text-ivory hover:text-brass-light"><span class="flex h-16 w-16 items-center justify-center rounded-full bg-brass text-2xl text-midnight">&#9654;</span><span class="text-sm">\2 · Watch on Vimeo</span></a>',
        html,
    )

    def link(m):
        url = m.group(2)
        if url.startswith("/_next"):
            return m.group(0)
        path = url.split("?")[0].split("#")[0]
        return f'{m.group(1)}"#{view_id(path)}"'

    return re.sub(r'(href=)"(/[^"]*)"', link, html)


views = []
for route, html in pages.items():
    main = re.search(r'<main id="main">(.*?)</main>', html, re.S).group(1)
    vid = view_id(route)
    hidden = "" if vid == "home" else " hidden"
    views.append(f'<div data-view="{vid}"{hidden}>{clean(main)}</div>')

questions = json.loads(
    subprocess.check_output(
        ["node", "--experimental-strip-types", "--no-warnings", "-e",
         "import('./lib/content.ts').then(m => console.log(JSON.stringify(m.snapshotQuestions)))"],
        cwd=ROOT,
    )
)

script = r"""
(() => {
  const views = [...document.querySelectorAll('[data-view]')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  let io;

  function arm(view) {
    if (reduce || !('IntersectionObserver' in window)) return;
    root.classList.add('reveal-on');
    io && io.disconnect();
    io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
    [...view.querySelectorAll('section:not([data-no-reveal])')].slice(1).forEach((s) => { s.setAttribute('data-reveal', ''); io.observe(s); });
    view.querySelectorAll('[data-stagger]').forEach((g) => { [...g.children].forEach((c, i) => c.style.setProperty('--stagger', i * 110 + 'ms')); io.observe(g); });
  }

  function show() {
    const id = (location.hash || '#home').slice(1);
    const target = views.find((v) => v.dataset.view === id) || views.find((v) => v.dataset.view === 'home');
    views.forEach((v) => { v.hidden = v !== target; });
    window.scrollTo(0, 0);
    arm(target);
    onScroll();
    menu.hidden = true;
  }

  // Mobile menu, rebuilt from the desktop links.
  const btn = document.querySelector('header button[aria-controls]');
  const menu = document.createElement('nav');
  menu.hidden = true;
  menu.className = 'border-t border-midnight/10 bg-ivory lg:hidden';
  menu.innerHTML = '<div class="container-x flex flex-col py-4">' +
    [...document.querySelectorAll('header nav a')].map((a) => `<a href="${a.getAttribute('href')}" class="py-3 text-lg font-medium">${a.textContent}</a>`).join('') +
    '<a href="#snapshot" class="btn-primary mt-4">Find your frequency</a></div>';
  document.querySelector('header').appendChild(menu);
  btn && btn.addEventListener('click', () => { menu.hidden = !menu.hidden; });

  // Scroll progress, parallax and kinetic type.
  const bar = document.getElementById('scroll-progress');
  let ticking = false;
  function update() {
    ticking = false;
    const vh = innerHeight, max = root.scrollHeight - vh;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    if (reduce) return;
    document.querySelectorAll('[data-view]:not([hidden]) [data-parallax]').forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      el.style.transform = `translate3d(0, ${(r.top + r.height / 2 - vh / 2) * -Number(el.dataset.parallax)}px, 0)`;
    });
    document.querySelectorAll('[data-view]:not([hidden]) [data-scroll-x]').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      el.style.transform = `translate3d(${(r.top - vh) * Number(el.dataset.scrollX)}px, 0, 0)`;
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  // Forms: this preview has no server, so confirm on the spot.
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    f.outerHTML = '<p class="text-lg font-medium">Got it. Loud and clear. (Preview only: nothing was sent.)</p>';
  });

  // Snapshot quiz.
  const QUESTIONS = __QUESTIONS__;
  const max = QUESTIONS.length * 3;
  const READINGS = [
    { min: 0.75, title: 'Perfectly in tune', body: 'Look at you, hitting every note. A pendant and a few drops of Liquilight will keep the song going when life turns the volume up.', href: '#shop-small-personal-kit', label: 'See the Small Personal Kit' },
    { min: 0.45, title: 'Slightly off-key', body: 'Some of your day is in rhythm and some of it’s freestyle jazz. Most people here start with the Small Kit and retake the Snapshot in 30 days.', href: '#shop-small-personal-kit', label: 'See the Small Personal Kit' },
    { min: 0, title: 'Time for a tune-up', body: 'Your days are running loud. The Full Kit puts our song in every room, and Chromatones gives you a daily soundtrack to settle into.', href: '#shop-full-personal-kit', label: 'See the Full Personal Kit' },
  ];
  const quiz = document.getElementById('snapshot-quiz');
  let step = 0, answers = [];
  function renderQuiz() {
    if (!quiz) return;
    if (step >= QUESTIONS.length) {
      const score = answers.reduce((a, b) => a + b, 0);
      const r = READINGS.find((x) => score / max >= x.min);
      quiz.innerHTML = `<p class="eyebrow">Your Snapshot</p><h2 class="mt-3 text-3xl sm:text-4xl">${r.title}</h2>
        <div class="mt-6 h-3 w-full overflow-hidden rounded-full bg-mist"><div class="h-full rounded-full bg-brass" style="width:${Math.max(6, score / max * 100)}%"></div></div>
        <p class="mt-2 text-sm text-stone">Baseline ${score} of ${max}</p><p class="mt-6 text-lg">${r.body}</p>
        <div class="mt-6 flex flex-wrap gap-3"><a href="${r.href}" class="btn-primary">${r.label}</a><button type="button" class="btn-ghost" data-restart>Start over</button></div>
        <p class="mt-8 text-xs text-stone">The Snapshot is a self-reflection tool, not a medical assessment.</p>`;
      quiz.querySelector('[data-restart]').onclick = () => { step = 0; answers = []; renderQuiz(); };
      return;
    }
    const q = QUESTIONS[step];
    quiz.innerHTML = `<div class="flex items-center justify-between text-sm text-stone"><span>Question ${step + 1} of ${QUESTIONS.length}</span></div>
      <div class="mt-3 h-1.5 w-full rounded-full bg-mist"><div class="h-full rounded-full bg-brass" style="width:${step / QUESTIONS.length * 100}%"></div></div>
      <fieldset class="mt-8"><legend class="font-display text-2xl leading-snug sm:text-3xl">${q.prompt}</legend>
      <div class="mt-6 grid gap-3 sm:grid-cols-2">${q.options.map((o, i) => `<button type="button" data-i="${i}" class="rounded-xl border border-midnight/15 px-5 py-4 text-left text-lg hover:border-midnight hover:bg-midnight/5">${o.label}</button>`).join('')}</div></fieldset>`;
    quiz.querySelectorAll('button[data-i]').forEach((b) => b.onclick = () => { answers[step] = q.options[b.dataset.i].score; step++; renderQuiz(); });
  }
  renderQuiz();

  addEventListener('hashchange', show);
  show();
})();
""".replace("__QUESTIONS__", json.dumps(questions))

page = f"""<title>Sonaura Website Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&display=swap">
<style>
{css}
/* A single deliberate light look: the brand palette, regardless of the viewer's theme. */
:root {{ color-scheme: light; }}
body {{ background: #F7F2EA; color: #16153F; }}
</style>
<div id="scroll-progress" aria-hidden="true" class="fixed inset-x-0 top-0 z-50 h-[3px] origin-left scale-x-0 bg-brass"></div>
<p class="bg-brass px-4 py-2 text-center text-sm font-medium text-midnight-900">Review copy. Tap anything to leave a comment.</p>
{clean(header)}
<main id="main">
{''.join(views)}
</main>
{clean(footer)}
<script>{script}</script>
"""
sys.stdout.write(page)
