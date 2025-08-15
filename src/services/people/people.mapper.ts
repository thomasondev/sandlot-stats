import type { PeopleEntity } from './people.record.js';
import type { PersonCsvRow } from '../csv/schema/person.schema.js';

export function mapPeopleCsvRowToPeopleEntity(row: PersonCsvRow): PeopleEntity {
  return {
    playerId: row.playerID,
    birth: {
      date: new Date(Date.UTC(row.birthYear, row.birthMonth - 1, row.birthDay)),
      city: row.birthCity,
      state: row.birthState,
      country: row.birthCountry,
    },
    firstName: row.nameFirst,
    lastName: row.nameLast,
  };
}
