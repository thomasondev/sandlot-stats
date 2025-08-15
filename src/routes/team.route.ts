import express from 'express';
import { getAllTeams } from '../controllers/team.controller.js';

const router = express.Router();
router.get('/', getAllTeams);

export default router;
