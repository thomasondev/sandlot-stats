import type { Request, Response } from 'express';
import { readTeams } from '../services/team/service.js';
import z from 'zod/v4';

const TeamQueryParamsSchema = z.object({
  year: z.coerce.number().optional(),
});

interface TeamDto {
  count: number;
  teams: {
    year: number;
    name: string;
    wins: number;
    losses: number;
    winningPercentage: number;
  }[];
}

export type TeamQueryParams = z.infer<typeof TeamQueryParamsSchema>;

export async function getAllTeams(req: Request, res: Response) {
  const teamQueryParams = TeamQueryParamsSchema.parse(req.query);

  const teams = await readTeams(teamQueryParams);
  const teamDto: TeamDto = {
    count: teams.length,
    teams: teams
      .map((team) => ({
        year: team.year,
        losses: team.losses,
        name: team.name,
        wins: team.wins,
        winningPercentage: Number(
          (team.wins / (team.wins + team.losses)).toPrecision(3)
        ),
      }))
      .sort((a, b) => b.winningPercentage - a.winningPercentage),
  };

  res.json(teamDto);
}
