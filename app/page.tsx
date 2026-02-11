'use client'

import { useState } from 'react'
import { Trophy, Medal, TrendingUp, Users, Flame, Clock, Search, ChevronUp, ChevronDown } from 'lucide-react'
import { leaderboardData, formatNumber, type Player } from '@/lib/data'
import { cn } from '@/lib/utils'

type SortKey = 'rank' | 'score' | 'wins' | 'winRate' | 'streak'
type SortOrder = 'asc' | 'desc'

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="rank-badge flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/30">
        <Trophy className="w-5 h-5 text-white" />
      </div>
    )
  }
  if (rank === 2) {
    return (
      <div className="rank-badge flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg shadow-gray-400/30">
        <Medal className="w-5 h-5 text-white" />
      </div>
    )
  }
  if (rank === 3) {
    return (
      <div className="rank-badge flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 shadow-lg shadow-amber-600/30">
        <Medal className="w-5 h-5 text-white" />
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
      <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
    </div>
  )
}

function StatCard({ title, value, icon: Icon, gradient }: { 
  title: string
  value: string
  icon: React.ElementType
  gradient: string 
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-card border border-border p-6">
      <div className={`absolute top-0 right-0 w-24 h-24 opacity-10 ${gradient}`} style={{ borderRadius: '0 0 0 100%' }} />
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${gradient}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('rank')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder(key === 'rank' ? 'asc' : 'desc')
    }
  }

  const filteredAndSortedData = leaderboardData
    .filter(player => 
      player.username.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const multiplier = sortOrder === 'asc' ? 1 : -1
      return (a[sortKey] - b[sortKey]) * multiplier
    })

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) return null
    return sortOrder === 'asc' ? 
      <ChevronUp className="w-4 h-4 inline ml-1" /> : 
      <ChevronDown className="w-4 h-4 inline ml-1" />
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/30">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Razed Leaderboard
          </h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Compete, climb the ranks, and prove you&apos;re the best. Updated in real-time.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Players"
          value={formatNumber(leaderboardData.length)}
          icon={Users}
          gradient="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <StatCard
          title="Top Score"
          value={formatNumber(leaderboardData[0].score)}
          icon={Trophy}
          gradient="bg-gradient-to-br from-yellow-500 to-amber-500"
        />
        <StatCard
          title="Highest Win Rate"
          value={`${Math.max(...leaderboardData.map(p => p.winRate))}%`}
          icon={TrendingUp}
          gradient="bg-gradient-to-br from-green-500 to-emerald-500"
        />
        <StatCard
          title="Longest Streak"
          value={`${Math.max(...leaderboardData.map(p => p.streak))} wins`}
          icon={Flame}
          gradient="bg-gradient-to-br from-orange-500 to-red-500"
        />
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xl shadow-black/5">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-4 px-6 font-semibold">
                  <button 
                    onClick={() => handleSort('rank')}
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    Rank <SortIcon columnKey="rank" />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold">Player</th>
                <th className="text-left py-4 px-6 font-semibold">
                  <button 
                    onClick={() => handleSort('score')}
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    Score <SortIcon columnKey="score" />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold hidden md:table-cell">
                  <button 
                    onClick={() => handleSort('wins')}
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    W/L <SortIcon columnKey="wins" />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold hidden lg:table-cell">
                  <button 
                    onClick={() => handleSort('winRate')}
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    Win Rate <SortIcon columnKey="winRate" />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold hidden lg:table-cell">
                  <button 
                    onClick={() => handleSort('streak')}
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    Streak <SortIcon columnKey="streak" />
                  </button>
                </th>
                <th className="text-left py-4 px-6 font-semibold hidden xl:table-cell">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" /> Last Active
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.map((player) => (
                <tr 
                  key={player.rank} 
                  className={cn(
                    "leaderboard-row border-b border-border last:border-0",
                    player.rank <= 3 && "bg-gradient-to-r from-primary/5 to-transparent"
                  )}
                >
                  <td className="py-4 px-6">
                    <RankBadge rank={player.rank} />
                  </td>
                  <td className="py-4 px-6">
                    <span className={cn(
                      "font-semibold text-lg",
                      player.rank === 1 && "gradient-gold",
                      player.rank === 2 && "gradient-silver",
                      player.rank === 3 && "gradient-bronze"
                    )}>
                      {player.username}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-lg">{formatNumber(player.score)}</span>
                  </td>
                  <td className="py-4 px-6 hidden md:table-cell">
                    <span className="text-green-500">{player.wins}</span>
                    <span className="text-muted-foreground mx-1">/</span>
                    <span className="text-red-500">{player.losses}</span>
                  </td>
                  <td className="py-4 px-6 hidden lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full",
                            player.winRate >= 70 ? "bg-green-500" :
                            player.winRate >= 50 ? "bg-yellow-500" : "bg-red-500"
                          )}
                          style={{ width: `${player.winRate}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{player.winRate}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 hidden lg:table-cell">
                    {player.streak > 0 ? (
                      <div className="flex items-center gap-1 text-orange-500">
                        <Flame className="w-4 h-4" />
                        <span className="font-semibold">{player.streak}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="py-4 px-6 hidden xl:table-cell">
                    <span className="text-muted-foreground text-sm">{player.lastActive}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAndSortedData.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            No players found matching &quot;{searchQuery}&quot;
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-muted-foreground text-sm">
        <p>© 2024 Razed. All rights reserved.</p>
      </footer>
    </main>
  )
}
