import { Router } from 'express'
import { addArea, addLaptop, addMark, addNote, deleteArea, deleteLaptop, deleteMark, deleteNote, getAreas, getLatptops, getMarks, getNotes, updateArea, updateLaptop, updateMark, updateNote } from '../controllers/laptops_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/laptops/areas', getAreas)
router.post('/cmdb/laptops/areas', addArea)
router.put('/cmdb/laptops/areas', updateArea)
router.delete('/cmdb/laptops/areas', deleteArea)

router.get('/cmdb/laptops/marks', getMarks)
router.post('/cmdb/laptops/marks', addMark)
router.put('/cmdb/laptops/marks', updateMark)
router.delete('/cmdb/laptops/marks', deleteMark)

router.get('/cmdb/laptops', getLatptops)
router.post('/cmdb/laptops', addLaptop)
router.put('/cmdb/laptops', updateLaptop)
router.delete('/cmdb/laptops', deleteLaptop)

router.get('/cmdb/laptops/notes', getNotes)
router.post('/cmdb/laptops/notes', addNote)
router.put('/cmdb/laptops/notes', updateNote)
router.delete('/cmdb/laptops/notes', deleteNote)

export default router