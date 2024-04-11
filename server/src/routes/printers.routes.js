import { Router } from 'express'
import { 
  getDates,
  getPrinters,
  getRegisters,
  getToners,
  getYears,
  updateRegisters,
  updateToners,
  updateDatesReport
} from '../controllers/printers.controllers.js'

const router = Router()

router.get('/printers', getPrinters)

router.get('/printers/years', getYears)

router.get('/printers/dates', getDates)

router.get('/printers/toners', getToners)

router.put('/printers/toners/update', updateToners)

router.get('/printers/registers', getRegisters)

router.put('/printers/registers/update', updateRegisters)

router.put('/printers/dates_report/update', updateDatesReport)

export default router