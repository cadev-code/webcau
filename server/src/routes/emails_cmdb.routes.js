import { Router } from 'express'

import { 
  addArea, 
  addList, 
  addRegisterByArea, 
  deleteArea, 
  deleteList, 
  deleteRegisterByArea, 
  getAreas, 
  getLists, 
  getRegisters, 
  getRegistersByArea, 
  updateArea,
  updateList,
  updateRegisterByArea
} from '../controllers/emails_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/emails/areas', getAreas)
router.post('/cmdb/emails/areas', addArea)
router.put('/cmdb/emails/areas', updateArea)
router.delete('/cmdb/emails/areas', deleteArea)

router.get('/cmdb/emails/lists', getLists)
router.post('/cmdb/emails/lists', addList)
router.put('/cmdb/emails/lists', updateList)
router.delete('/cmdb/emails/lists', deleteList)

router.get('/cmdb/emails/registers/all', getRegisters)
router.get('/cmdb/emails/registers', getRegistersByArea)
router.post('/cmdb/emails/registers', addRegisterByArea)
router.put('/cmdb/emails/registers', updateRegisterByArea)
router.delete('/cmdb/emails/registers', deleteRegisterByArea)

export default router