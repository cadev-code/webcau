import { Router } from 'express'
import { 
  addZone, 
  deleteZone, 
  getZones, 
  updateZone 
} from '../controllers/whitelists_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/whitelists/zones', getZones)
router.post('/cmdb/whitelists/zones', addZone)
router.put('/cmdb/whitelists/zones', updateZone)
router.delete('/cmdb/whitelists/zones', deleteZone)

export default router