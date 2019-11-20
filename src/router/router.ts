import { Router } from 'express';
const router = Router();

import indexhandler from './../routes/indexhandler';
import livehandler from './../routes/livehandler';
import streamsapihandler from './../routes/streamsapihandler';

router.get('/', indexhandler);
router.get('/live/:streamname', livehandler);
router.get('/streamsapi', streamsapihandler);

export default router;