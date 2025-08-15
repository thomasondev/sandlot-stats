import z from 'zod/v4';
import { parse } from 'csv-parse';
import fs from 'node:fs';
import path from 'node:path';
import {
  BattingCsvRowSchema,
  type BattingCsvRow,
} from './schema/batting.schema.js';
import {
  AppearanceCsvRowSchema,
  type AppearanceCsvRow,
} from './schema/appearance.schema.js';
import {
  PersonCsvRowSchema,
  type PersonCsvRow,
} from './schema/person.schema.js';
import { TeamCsvRowSchema, type TeamCsvRow } from './schema/team.schema.js';

const DATA_DIRECTORY = path.join(import.meta.dirname, '../../../', 'data');

export async function readTeamsCsvFile(): Promise<TeamCsvRow[]> {
  return await readCsvFile('Teams.csv', TeamCsvRowSchema);
}

export async function readPeopleCsvFile(): Promise<PersonCsvRow[]> {
  return await readCsvFile('People.csv', PersonCsvRowSchema);
}

export async function readBattingCsvFile(): Promise<BattingCsvRow[]> {
  return await readCsvFile('Batting.csv', BattingCsvRowSchema);
}

export async function readAppearancesCsvFile(): Promise<AppearanceCsvRow[]> {
  return await readCsvFile('Appearances.csv', AppearanceCsvRowSchema);
}

export async function readCsvFile<TCsvRowSchema extends z.core.$ZodType>(
  filename: string,
  schema: TCsvRowSchema
): Promise<z.infer<TCsvRowSchema>[]> {
  const parser = fs.createReadStream(path.join(DATA_DIRECTORY, filename)).pipe(
    parse({
      columns: true,
    })
  );

  const csvRows: z.infer<TCsvRowSchema>[] = [];
  for await (const row of parser) {
    csvRows.push(z.core.parse(schema, row));
  }

  return csvRows;
}
