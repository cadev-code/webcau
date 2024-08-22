import { Router } from 'express'
import { addCampaign, addMark, deleteCampaign, deleteMark, getCampaigns, getMarks, updateCampaign, updateMark } from '../controllers/biometrics_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/biometrics/campaigns', getCampaigns)
router.post('/cmdb/biometrics/campaigns', addCampaign)
router.put('/cmdb/biometrics/campaigns', updateCampaign)
router.delete('/cmdb/biometrics/campaigns', deleteCampaign)

router.get('/cmdb/biometrics/marks', getMarks)
router.post('/cmdb/biometrics/marks', addMark)
router.put('/cmdb/biometrics/marks', updateMark)
router.delete('/cmdb/biometrics/marks', deleteMark)

export default router