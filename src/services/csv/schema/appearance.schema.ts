import z from 'zod/v4';

export const AppearanceCsvRowSchema = z.object({
  yearID: z.coerce.number(),
  teamID: z.string(),
  playerID: z.string(),
  G_all: z.coerce.number(),
});

export type AppearanceCsvRow = z.infer<typeof AppearanceCsvRowSchema>;
