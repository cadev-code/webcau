import { Router } from 'express'
import { 
  addData,
  deleteData,
  getAllData, 
  getDataGeneralFilter, 
  getDataSpecificFilter, 
  updateData 
} from '../controllers/cmdb.controllers.js'

const router = Router()

router.get('/cmdb/data', getAllData)
router.post('/cmdb/data/add', addData)
router.put('/cmdb/data/update', updateData)
router.delete('/cmdb/data/delete/:id', deleteData)
router.get('/cmdb/data/general/:search', getDataGeneralFilter)
router.get('/cmdb/data/specific', getDataSpecificFilter)

export default router