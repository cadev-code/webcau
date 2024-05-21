import { Router } from 'express'
import {
  addArea,
  addLicense,
  deleteArea,
  deleteLicense,
  getAreas,
  getLicenses,
  updateArea,
  updateLicense,
} from '../controllers/computers_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/computers/areas', getAreas)
router.post('/cmdb/computers/areas', addArea)
router.put('/cmdb/computers/areas', updateArea)
router.delete('/cmdb/computers/areas', deleteArea)

router.get('/cmdb/computers/licenses', getLicenses)
router.post('/cmdb/computers/licenses', addLicense)
router.put('/cmdb/computers/licenses', updateLicense)
router.delete('/cmdb/computers/licenses', deleteLicense)


export default router