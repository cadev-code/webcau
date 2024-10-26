import { Router } from 'express'
import { addArea, deleteArea, getAreas, updateArea } from '../controllers/extensions_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/extensions/areas', getAreas)
router.post('/cmdb/extensions/areas', addArea)
router.put('/cmdb/extensions/areas', updateArea)
router.delete('/cmdb/extensions/areas', deleteArea)

export default router