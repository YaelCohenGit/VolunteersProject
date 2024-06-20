import express from 'express';

import controller from '../controllers/VolunteerController.js';
  

const router = express.Router();


router.get('/', controller.getAll);

router.get('/:_id', controller.get);

router.post('/', controller.insert);

router.put('/:_id', controller.update);

router.delete('/:_id', controller.delete);


export default router;