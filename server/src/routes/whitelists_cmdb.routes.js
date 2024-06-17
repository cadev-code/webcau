import { Router } from 'express'
import { addComputer, addZone, deleteComputer, deleteZone, getComputers, getZones, updateComputer, updateZone } from '../controllers/whitelists_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/whitelists/zones', getZones)
router.post('/cmdb/whitelists/zones', addZone)
router.put('/cmdb/whitelists/zones', updateZone)
router.delete('/cmdb/whitelists/zones', deleteZone)

router.get('/cmdb/whitelists/computers', getComputers)
router.post('/cmdb/whitelists/computers', addComputer)
router.put('/cmdb/whitelists/computers', updateComputer)
router.delete('/cmdb/whitelists/computers', deleteComputer)

export default router