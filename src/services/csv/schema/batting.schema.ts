import z from 'zod/v4';

export const BattingCsvRowSchema = z.object({
  playerID: z.string(),
  yearID: z.coerce.number(),
  stint: z.coerce.number(),
  teamID: z.string(),
  AB: z.coerce.number(),
  R: z.coerce.number(),
  H: z.coerce.number(),
  '2B': z.coerce.number(),
  '3B': z.coerce.number(),
  HR: z.coerce.number(),
});

export type BattingCsvRow = z.infer<typeof BattingCsvRowSchema>;
