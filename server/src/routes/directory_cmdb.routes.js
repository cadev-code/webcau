import { Router } from 'express'
import { addArea, addDomain, addUO, addUser, deleteArea, deleteDomain, deleteUO, getAreas, getDomains, getUO, getUsers, updateArea, updateDomain, updateUO, updateUser } from '../controllers/directory_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/directory/uo', getUO)
router.post('/cmdb/directory/uo', addUO)
router.put('/cmdb/directory/uo', updateUO)
router.delete('/cmdb/directory/uo', deleteUO)

router.get('/cmdb/directory/areas', getAreas)
router.post('/cmdb/directory/areas', addArea)
router.put('/cmdb/directory/areas', updateArea)
router.delete('/cmdb/directory/areas', deleteArea)

router.get('/cmdb/directory/domains', getDomains)
router.post('/cmdb/directory/domains', addDomain)
router.put('/cmdb/directory/domains', updateDomain)
router.delete('/cmdb/directory/domains', deleteDomain)

router.get('/cmdb/directory/users', getUsers)
router.post('/cmdb/directory/users', addUser)
router.put('/cmdb/directory/users', updateUser)

export default router