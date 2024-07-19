import { Router } from 'express'
import { addArea, addResource, deleteArea, deleteResource, getAreas, getResources, updateArea, updateResource } from '../controllers/resources_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/resources/areas', getAreas)
router.post('/cmdb/resources/areas', addArea)
router.put('/cmdb/resources/areas', updateArea)
router.delete('/cmdb/resources/areas', deleteArea)

router.get('/cmdb/resources', getResources)
router.post('/cmdb/resources', addResource)
router.put('/cmdb/resources', updateResource)
router.delete('/cmdb/resources', deleteResource)

export default router