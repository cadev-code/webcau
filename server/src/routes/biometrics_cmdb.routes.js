import { Router } from 'express'
import { addCampaign, deleteCampaign, getCampaigns, updateCampaign } from '../controllers/biometrics_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/biometrics/campaign', getCampaigns)
router.post('/cmdb/biometrics/campaign', addCampaign)
router.put('/cmdb/biometrics/campaign', updateCampaign)
router.delete('/cmdb/biometrics/campaign', deleteCampaign)

export default router