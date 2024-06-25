import { Router } from 'express'
import {
  addArea,
  addLicense,
  addModel,
  addOrigin,
  addRegister,
  deleteArea,
  deleteLicense,
  deleteModel,
  deleteOrigin,
  deleteRegister,
  getAreas,
  getLicenses,
  getModels,
  getOrigins,
  getRegisters,
  updateArea,
  updateLicense,
  updateModel,
  updateOrigin,
  updateRegister,
} from '../controllers/computers_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/computers/areas', getAreas)
router.post('/cmdb/computers/areas', addArea)
router.put('/cmdb/computers/areas', updateArea)
router.delete('/cmdb/computers/areas', deleteArea)

router.get('/cmdb/computers/licenses', getLicenses)
router.post('/cmdb/computers/licenses', addLicense)
router.put('/cmdb/computers/licenses', updateLicense)
router.delete('/cmdb/computers/licenses', deleteLicense)

router.get('/cmdb/computers/models', getModels)
router.post('/cmdb/computers/models', addModel)
router.put('/cmdb/computers/models', updateModel)
router.delete('/cmdb/computers/models', deleteModel)

router.get('/cmdb/computers/origins', getOrigins)
router.post('/cmdb/computers/origins', addOrigin)
router.put('/cmdb/computers/origins', updateOrigin)
router.delete('/cmdb/computers/origins', deleteOrigin)

router.get('/cmdb/computers/registers', getRegisters)
router.post('/cmdb/computers/registers', addRegister)
router.put('/cmdb/computers/registers', updateRegister)
router.delete('/cmdb/computers/registers', deleteRegister)

export default router