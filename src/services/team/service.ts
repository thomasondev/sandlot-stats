import type { TeamCsvRow } from '../csv/schema/team.schema.js';
import { readTeamsCsvFile } from '../csv/service.js';
import type { TeamRecord } from './entity.js';

export async function readTeams(): Promise<TeamRecord[]> {
  const team = await readTeamsCsvFile();
  return team.map(mapTeamCsvRowToTeamEntity);
}

function mapTeamCsvRowToTeamEntity(row: TeamCsvRow): TeamRecord {
  return {
    year: row.yearID,
    teamId: row.teamID,
    franchiseId: row.franchID,
    divisionId: row.divID,
    divisionalRank: row.Rank,
    wins: row.W,
    losses: row.L,
    league: row.lgID,
    name: row.name,
  };
}
