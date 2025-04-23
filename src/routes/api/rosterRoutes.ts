import { Router } from 'express';
import RosterController from '../../controllers/rosterController';

const router = Router();
const rosterController = new RosterController();

router.get('/', rosterController.getRoster.bind(rosterController));
router.post('/add', rosterController.addMember.bind(rosterController));
router.delete('/remove/:id', rosterController.removeMember.bind(rosterController));

export default router;