import { Router } from 'express'

import { 
  addArea, 
  addRegisterByArea, 
  deleteArea, 
  deleteRegisterByArea, 
  getAreas, 
  getRegisters, 
  getRegistersByArea, 
  updateArea,
  updateRegisterByArea
} from '../controllers/emails_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/emails/areas', getAreas)
router.post('/cmdb/emails/areas', addArea)
router.put('/cmdb/emails/areas', updateArea)
router.delete('/cmdb/emails/areas', deleteArea)

router.get('/cmdb/emails/registers/all', getRegisters)
router.get('/cmdb/emails/registers', getRegistersByArea)
router.post('/cmdb/emails/registers', addRegisterByArea)
router.put('/cmdb/emails/registers', updateRegisterByArea)
router.delete('/cmdb/emails/registers', deleteRegisterByArea)

export default router