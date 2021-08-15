import { Router } from 'express';
const router = Router();

import { getSession,getSessionstudents } from '../controllers/session.controller';

router.route('/')
      .get(getSession)
      

router.route('/:id')
      .get(getSessionstudents)
     // .delete(deletePost)
      //.put(updatePost);

export default router;  