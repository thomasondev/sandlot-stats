import type { TeamQueryParams } from '../../controllers/team.controller.js';
import type { TeamCsvRow } from '../csv/schema/team.schema.js';
import { readTeamsCsvFile } from '../csv/service.js';
import type { Team } from './entity.js';

export async function readTeams(
  queryParams: TeamQueryParams = {}
): Promise<Team[]> {
  const rows = await readTeamsCsvFile();
  let teams = rows.map(mapTeamCsvRowToTeamEntity);

  if (queryParams.year) {
    teams = teams.filter((team) => team.year === queryParams.year);
  }

  return teams;
}

function mapTeamCsvRowToTeamEntity(row: TeamCsvRow): Team {
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
