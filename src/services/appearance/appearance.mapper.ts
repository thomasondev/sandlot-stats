import { type AppearanceEntity } from './appearance.record.js';
import type { AppearanceCsvRow } from '../csv/schema/appearance.schema.js';

export function mapCsvRowToAppearanceEntity(
  row: AppearanceCsvRow
): AppearanceEntity {
  return {
    gamesPlayed: row.G_all,
    playerId: row.playerID,
    teamId: row.teamID,
    yearId: row.yearID,
  };
}
