import { Router } from 'express'

import { getAreas } from '../controllers/emails_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/emails/areas', getAreas)

export default router