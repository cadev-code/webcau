import { Router } from 'express'
import { addArea, addType, deleteArea, deleteType, getAreas, getTypes, updateArea, updateType } from '../controllers/extensions_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/extensions/areas', getAreas)
router.post('/cmdb/extensions/areas', addArea)
router.put('/cmdb/extensions/areas', updateArea)
router.delete('/cmdb/extensions/areas', deleteArea)

router.get('/cmdb/extensions/types', getTypes)
router.post('/cmdb/extensions/types', addType)
router.put('/cmdb/extensions/types', updateType)
router.delete('/cmdb/extensions/types', deleteType)

export default router