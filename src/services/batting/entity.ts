export interface BattingEntity {
  playerId: string;
  yearId: number;
  teamId: string;
  orderOfAppearance: number;
  atBats: number;
  runs: number;
  hits: number;
  doubles: number;
  triples: number;
  homeRuns: number;
}
