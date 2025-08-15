import z from 'zod/v4';

export const PersonCsvRowSchema = z.object({
  playerID: z.string(),
  birthYear: z.coerce.number(),
  birthMonth: z.coerce.number(),
  birthDay: z.coerce.number(),
  birthCountry: z.string(),
  birthState: z.string(),
  birthCity: z.string(),
  nameFirst: z.string(),
  nameLast: z.string(),
  nameGiven: z.string(),
});

export type PersonCsvRow = z.infer<typeof PersonCsvRowSchema>;
