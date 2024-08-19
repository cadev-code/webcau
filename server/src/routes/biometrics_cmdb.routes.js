import { Router } from 'express'
import { getCampaigns } from '../controllers/biometrics_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/biometrics/campaign', getCampaigns)

export default router