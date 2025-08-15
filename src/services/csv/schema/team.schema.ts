import z from 'zod/v4';

export const TeamCsvRowSchema = z.object({
  yearID: z.coerce.number(),
  teamID: z.string(),
  divID: z.string(),
  franchID: z.string(),
  Rank: z.coerce.number(),
  W: z.coerce.number(),
  L: z.coerce.number(),
  lgID: z.string(),
  name: z.string(),
});

export type TeamCsvRow = z.infer<typeof TeamCsvRowSchema>;
