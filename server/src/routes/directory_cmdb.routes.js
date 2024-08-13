import { Router } from 'express'
import { addArea, addDomain, addPosition, addUO, addUser, addUserResource, deleteArea, deleteDomain, deletePosition, deleteUO, deleteUser, deleteUserResource, getAreas, getDomains, getPositions, getResources, getUO, getUserResources, getUsers, updateArea, updateDomain, updatePosition, updateUO, updateUser, updateUserResource } from '../controllers/directory_cmdb.controllers.js'

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

router.get('/cmdb/directory/positions', getPositions)
router.post('/cmdb/directory/positions', addPosition)
router.put('/cmdb/directory/positions', updatePosition)
router.delete('/cmdb/directory/positions', deletePosition)

router.get('/cmdb/directory/users', getUsers)
router.post('/cmdb/directory/users', addUser)
router.put('/cmdb/directory/users', updateUser)
router.delete('/cmdb/directory/users', deleteUser)

router.get('/cmdb/directory/resources', getResources)
router.get('/cmdb/directory/users/resources', getUserResources)
router.post('/cmdb/directory/users/resources', addUserResource)
router.put('/cmdb/directory/users/resources', updateUserResource)
router.delete('/cmdb/directory/users/resources', deleteUserResource)

export default router