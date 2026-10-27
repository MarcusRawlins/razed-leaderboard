import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">That page is out of tune.</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-stone">It may have moved when we got our new name. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">Home</Link>
        <Link href="/shop" className="btn-ghost">Shop</Link>
        <Link href="/contact" className="btn-ghost">Contact</Link>
      </div>
    </section>
  );
}
