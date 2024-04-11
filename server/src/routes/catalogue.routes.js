import { Router } from 'express'
import { getCatalogue } from '../controllers/catalogue.controllers.js'

const router = Router()

router.get('/catalogue', getCatalogue)

export default router