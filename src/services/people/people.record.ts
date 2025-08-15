export interface PeopleEntity {
  playerId: string;
  birth: {
    date: Date;
    country: string;
    state: string;
    city: string;
  };
  firstName: string;
  lastName: string;
}
