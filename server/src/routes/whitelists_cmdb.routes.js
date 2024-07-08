import { Router } from 'express'
import { addComputer, addCustomersEmail, addLocalEmail, addZone, deleteComputer, deleteCustomersEmail, deleteLocalEmail, deleteZone, getComputers, getCustomersEmails, getLocalEmails, getZones, updateComputer, updateCustomersEmail, updateLocalEmail, updateZone } from '../controllers/whitelists_cmdb.controllers.js'

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

router.get('/cmdb/whitelists/emails/customers', getCustomersEmails)
router.post('/cmdb/whitelists/emails/customers', addCustomersEmail)
router.put('/cmdb/whitelists/emails/customers', updateCustomersEmail)
router.delete('/cmdb/whitelists/emails/customers', deleteCustomersEmail)

export default router