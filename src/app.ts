import express from 'express';
import { readTeams } from './services/team/service.js';

const app = express();
const port = 3100;

app.get('/', async (req, res) => {
  console.log('!!!');
  const teams = await readTeams();
  res.json(teams);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
