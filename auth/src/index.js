import express from 'express'
import cors from 'cors'

import { PORT } from './config.js'
import authRouter from './routes/auth.routes.js'

const app = express()

app.use(cors())

app.use(authRouter)

app.listen(PORT, '0.0.0.0')
console.log(`Server on running in port ${ PORT }`)