import type { BattingCsvRow } from '../csv/schema/batting.schema.js';
import { readBattingCsvFile } from '../csv/service.js';
import type { BattingEntity } from './entity.js';

export async function readBatting(): Promise<BattingEntity[]> {
  const batting = await readBattingCsvFile();
  return batting.map(mapCsvRowToBattingEntity);
}

function mapCsvRowToBattingEntity(row: BattingCsvRow): BattingEntity {
  return {
    playerId: row.playerID,
    yearId: row.yearID,
    teamId: row.teamID,
    orderOfAppearance: row.stint,
    atBats: row.AB,
    runs: row.R,
    hits: row.H,
    doubles: row['2B'],
    triples: row['3B'],
    homeRuns: row.HR,
  };
}
