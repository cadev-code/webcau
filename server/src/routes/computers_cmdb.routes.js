import { Router } from 'express'
import {
  addArea,
  deleteArea,
  getAreas,
  updateArea,
} from '../controllers/computers_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/computers/areas', getAreas)
router.post('/cmdb/computers/areas', addArea)
router.put('/cmdb/computers/areas', updateArea)
router.delete('/cmdb/computers/areas', deleteArea)


export default router