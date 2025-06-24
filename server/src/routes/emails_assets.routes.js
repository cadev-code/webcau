import { Router } from 'express'
import { addArea, addList, addRegister, addSite, deleteArea, deleteList, deleteRegisterByArea, deleteSite, getAreas, getLists, getRegisters, getSites, updateArea, updateList, updateRegisterByArea, updateSite } from '../controllers/emails_assets.controllers.js'

const router = Router()

router.get('/assets/emails/areas', getAreas)
router.post('/assets/emails/areas', addArea)
router.put('/assets/emails/areas', updateArea)
router.delete('/assets/emails/areas', deleteArea)

router.get('/assets/emails/sites', getSites)
router.post('/assets/emails/sites', addSite)
router.put('/assets/emails/sites', updateSite)
router.delete('/assets/emails/sites', deleteSite)

router.get('/assets/emails/lists', getLists)
router.post('/assets/emails/lists', addList)
router.put('/assets/emails/lists', updateList)
router.delete('/assets/emails/lists', deleteList)

router.get('/assets/emails/registers/all', getRegisters)
router.post('/assets/emails/registers', addRegister)
router.put('/assets/emails/registers', updateRegisterByArea)
router.delete('/assets/emails/registers', deleteRegisterByArea)

export default router