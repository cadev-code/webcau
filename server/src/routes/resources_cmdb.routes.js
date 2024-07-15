import { Router } from 'express'
import { addResource, deleteResource, getResources, updateResource } from '../controllers/resources_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/resources', getResources)
router.post('/cmdb/resources', addResource)
router.put('/cmdb/resources', updateResource)
router.delete('/cmdb/resources', deleteResource)

export default router