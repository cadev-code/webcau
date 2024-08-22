import { Router } from 'express'
import { addCampaign, deleteCampaign, getCampaigns, updateCampaign } from '../controllers/biometrics_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/biometrics/campaigns', getCampaigns)
router.post('/cmdb/biometrics/campaigns', addCampaign)
router.put('/cmdb/biometrics/campaigns', updateCampaign)
router.delete('/cmdb/biometrics/campaigns', deleteCampaign)

export default router