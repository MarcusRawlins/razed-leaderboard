export interface Player {
  rank: number
  username: string
  score: number
  wins: number
  losses: number
  winRate: number
  streak: number
  lastActive: string
}

// Generate realistic demo data
export const leaderboardData: Player[] = [
  { rank: 1, username: "ShadowViper", score: 12450, wins: 342, losses: 58, winRate: 85.5, streak: 12, lastActive: "2 min ago" },
  { rank: 2, username: "NightHawk_X", score: 11890, wins: 318, losses: 72, winRate: 81.5, streak: 8, lastActive: "5 min ago" },
  { rank: 3, username: "BlazeFury99", score: 11340, wins: 295, losses: 85, winRate: 77.6, streak: 5, lastActive: "12 min ago" },
  { rank: 4, username: "IcePhoenix", score: 10980, wins: 287, losses: 93, winRate: 75.5, streak: 3, lastActive: "18 min ago" },
  { rank: 5, username: "ThunderStrike", score: 10540, wins: 274, losses: 98, winRate: 73.7, streak: 6, lastActive: "25 min ago" },
  { rank: 6, username: "DarkReaper_01", score: 10120, wins: 265, losses: 105, winRate: 71.6, streak: 2, lastActive: "32 min ago" },
  { rank: 7, username: "CrimsonBlade", score: 9780, wins: 251, losses: 112, winRate: 69.1, streak: 4, lastActive: "45 min ago" },
  { rank: 8, username: "StormBreaker", score: 9450, wins: 243, losses: 118, winRate: 67.3, streak: 1, lastActive: "1 hr ago" },
  { rank: 9, username: "NeonDragon", score: 9120, wins: 232, losses: 128, winRate: 64.4, streak: 7, lastActive: "1 hr ago" },
  { rank: 10, username: "QuantumAce", score: 8890, wins: 225, losses: 135, winRate: 62.5, streak: 0, lastActive: "2 hr ago" },
  { rank: 11, username: "VortexHunter", score: 8650, wins: 218, losses: 142, winRate: 60.6, streak: 2, lastActive: "2 hr ago" },
  { rank: 12, username: "SilentAssassin", score: 8420, wins: 210, losses: 150, winRate: 58.3, streak: 1, lastActive: "3 hr ago" },
  { rank: 13, username: "GhostRider_77", score: 8190, wins: 203, losses: 157, winRate: 56.4, streak: 3, lastActive: "3 hr ago" },
  { rank: 14, username: "CosmicKnight", score: 7960, wins: 196, losses: 164, winRate: 54.4, streak: 0, lastActive: "4 hr ago" },
  { rank: 15, username: "WildFire_X", score: 7730, wins: 189, losses: 171, winRate: 52.5, streak: 1, lastActive: "5 hr ago" },
  { rank: 16, username: "AlphaWolf", score: 7510, wins: 182, losses: 178, winRate: 50.6, streak: 2, lastActive: "6 hr ago" },
  { rank: 17, username: "RogueSniper", score: 7290, wins: 175, losses: 185, winRate: 48.6, streak: 0, lastActive: "7 hr ago" },
  { rank: 18, username: "ElectricStorm", score: 7080, wins: 168, losses: 192, winRate: 46.7, streak: 1, lastActive: "8 hr ago" },
  { rank: 19, username: "SolarFlare22", score: 6870, wins: 161, losses: 199, winRate: 44.7, streak: 0, lastActive: "10 hr ago" },
  { rank: 20, username: "OmegaForce", score: 6660, wins: 154, losses: 206, winRate: 42.8, streak: 2, lastActive: "12 hr ago" },
]

export function formatNumber(num: number): string {
  return num.toLocaleString()
}
