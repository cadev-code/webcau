import { Router } from 'express'
import multer from 'multer'
import {
  deleteMap,
  getMapOrder,
  getMaps,
  updateMap,
  updateMapOrder,
  uploadMap
} from '../controllers/maps.controllers.js'

const router = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

export const upload = multer({ storage })

router.get('/maps', getMaps)
router.post('/maps/upload', upload.single('file'), uploadMap)
router.put('/maps/update', upload.single('file'), updateMap)
router.delete('/maps/delete', deleteMap)

router.get('/maps/order', getMapOrder)
router.put('/maps/order/update', updateMapOrder)

export default router