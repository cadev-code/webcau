import express from 'express'
import cors from 'cors'
import multer from 'multer'

import { PORT } from './src/config.js'
import printersRouter from './src/routes/printers.routes.js'
import catalogueRouter from './src/routes/catalogue.routes.js'
import officeRouter from './src/routes/office.routes.js'
import cmdbRouter from './src/routes/cmdb.routes.js'
import emails_cmdbRouter from './src/routes/emails_cmdb.routes.js'
import mapsRouter from './src/routes/maps.routes.js'

const app = express()

app.use(cors())
app.use(express.json()) // procesa los datos del cliente "req.body" para leerlos en formato JSON

app.use(express.static('public'))

app.use(printersRouter)
app.use(catalogueRouter)
app.use(officeRouter)
app.use(cmdbRouter)
app.use(emails_cmdbRouter)
app.use(mapsRouter)

app.listen(PORT, '0.0.0.0')
console.log(`server on running in port ${ PORT }`)