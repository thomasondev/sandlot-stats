import express from 'express';
import teamRoutes from './routes/team.route.js';

const app = express();
const port = 3100;

app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/team', teamRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
