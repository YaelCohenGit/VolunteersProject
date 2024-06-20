import express from 'express';
const router = express.Router();
import controller from '../controllers/HelpRequestController.js';






router.get('/', controller.getAll);

router.get('/:_id', controller.get);

router.post('/', controller.insert);

router.put('/:_id', controller.update);

router.delete('/:_id', controller.delete);


export default router;