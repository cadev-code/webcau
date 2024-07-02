import { Router } from 'express'
import { addUO, deleteUO, getUO, updateUO } from '../controllers/directory_cmdb.controllers.js'

const router = Router()

router.get('/cmdb/directory/uo', getUO)
router.post('/cmdb/directory/uo', addUO)
router.put('/cmdb/directory/uo', updateUO)
router.delete('/cmdb/directory/uo', deleteUO)

export default router