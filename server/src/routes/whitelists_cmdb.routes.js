import { Router } from 'express'
import { addComputer, addLocalEmail, addZone, deleteComputer, deleteLocalEmail, deleteZone, getComputers, getLocalEmails, getZones, updateComputer, updateLocalEmail, updateZone } from '../controllers/whitelists_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/whitelists/zones', getZones)
router.post('/cmdb/whitelists/zones', addZone)
router.put('/cmdb/whitelists/zones', updateZone)
router.delete('/cmdb/whitelists/zones', deleteZone)

router.get('/cmdb/whitelists/computers', getComputers)
router.post('/cmdb/whitelists/computers', addComputer)
router.put('/cmdb/whitelists/computers', updateComputer)
router.delete('/cmdb/whitelists/computers', deleteComputer)

router.get('/cmdb/whitelists/emails/local', getLocalEmails)
router.post('/cmdb/whitelists/emails/local', addLocalEmail)
router.put('/cmdb/whitelists/emails/local', updateLocalEmail)
router.delete('/cmdb/whitelists/emails/local', deleteLocalEmail)

export default router