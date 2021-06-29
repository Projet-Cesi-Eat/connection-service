import express from 'express';
import { Request, Response } from 'express';
import { ConnectionService } from '../controllers/connectionController';

const router = express.Router();

const connectionService = new ConnectionService();

/* GET users listing. */
router.post('/register/', (req: Request, res: Response) => {
  connectionService.register(req, res);
});

router.post('/login/', (req: Request, res: Response) => {
  connectionService.login(req, res);
});

module.exports = router;
