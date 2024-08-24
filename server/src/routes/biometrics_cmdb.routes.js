import { Router } from 'express'
import { addAssignment, addCampaign, addDevice, addMark, addModel, deleteAssignment, deleteCampaign, deleteMark, deleteModel, getAssignments, getCampaigns, getDevices, getMarks, getModels, updateAssignment, updateCampaign, updateDevice, updateMark, updateModel } from '../controllers/biometrics_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/biometrics/campaigns', getCampaigns)
router.post('/cmdb/biometrics/campaigns', addCampaign)
router.put('/cmdb/biometrics/campaigns', updateCampaign)
router.delete('/cmdb/biometrics/campaigns', deleteCampaign)

router.get('/cmdb/biometrics/marks', getMarks)
router.post('/cmdb/biometrics/marks', addMark)
router.put('/cmdb/biometrics/marks', updateMark)
router.delete('/cmdb/biometrics/marks', deleteMark)

router.get('/cmdb/biometrics/models', getModels)
router.post('/cmdb/biometrics/models', addModel)
router.put('/cmdb/biometrics/models', updateModel)
router.delete('/cmdb/biometrics/models', deleteModel)

router.get('/cmdb/biometrics/assignments', getAssignments)
router.post('/cmdb/biometrics/assignments', addAssignment)
router.put('/cmdb/biometrics/assignments', updateAssignment)
router.delete('/cmdb/biometrics/assignments', deleteAssignment)

router.get('/cmdb/biometrics/devices', getDevices)
router.post('/cmdb/biometrics/devices', addDevice)
router.put('/cmdb/biometrics/devices', updateDevice)

export default router