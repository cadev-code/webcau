import { Router } from 'express'
import { addArea, addUO, deleteArea, deleteUO, getAreas, getUO, updateArea, updateUO } from '../controllers/directory_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/directory/uo', getUO)
router.post('/cmdb/directory/uo', addUO)
router.put('/cmdb/directory/uo', updateUO)
router.delete('/cmdb/directory/uo', deleteUO)

router.get('/cmdb/directory/areas', getAreas)
router.post('/cmdb/directory/areas', addArea)
router.put('/cmdb/directory/areas', updateArea)
router.delete('/cmdb/directory/areas', deleteArea)

export default router