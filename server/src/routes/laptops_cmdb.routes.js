import { Router } from 'express'
import { addArea, addMark, deleteArea, deleteMark, getAreas, getMarks, updateArea, updateMark } from '../controllers/laptops_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/laptops/areas', getAreas)
router.post('/cmdb/laptops/areas', addArea)
router.put('/cmdb/laptops/areas', updateArea)
router.delete('/cmdb/laptops/areas', deleteArea)

router.get('/cmdb/laptops/marks', getMarks)
router.post('/cmdb/laptops/marks', addMark)
router.put('/cmdb/laptops/marks', updateMark)
router.delete('/cmdb/laptops/marks', deleteMark)

export default router