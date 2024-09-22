import { Router } from 'express'
import { addArea, deleteArea, getAreas, updateArea } from '../controllers/laptops_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/laptops/areas', getAreas)
router.post('/cmdb/laptops/areas', addArea)
router.put('/cmdb/laptops/areas', updateArea)
router.delete('/cmdb/laptops/areas', deleteArea)

export default router