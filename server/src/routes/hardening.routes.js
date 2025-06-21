import { Router } from 'express'
import { getGPOs, getPolicies, loadDataFromWorkbook, updatePolicyCheck } from '../controllers/hardening.controllers.js'
import multer from 'multer'

const router = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/hardening/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

export const upload = multer({ storage })

router.post('/hardening/load-sheet', upload.single('file'), loadDataFromWorkbook);
router.get('/hardening/gpos', getGPOs);
router.get('/hardening/policies', getPolicies);
router.put('/hardening/update-policy', updatePolicyCheck);

export default router