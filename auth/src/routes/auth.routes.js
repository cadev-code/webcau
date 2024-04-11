import { Router } from 'express'
import { 
  getAuthenticatedUser, 
  getUser 
} from '../controllers/auth.controllers.js'

const router = Router()

router.get('/user', getUser)
router.get('/user/verify', getAuthenticatedUser)

export default router