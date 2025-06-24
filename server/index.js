import express from 'express'
import cors from 'cors'

import { PORT } from './src/config.js'
import printersRouter from './src/routes/printers.routes.js'
import catalogueRouter from './src/routes/catalogue.routes.js'
import officeRouter from './src/routes/office.routes.js'
import computers_cmdbRouter from './src/routes/computers_cmdb.routes.js'
import emails_cmdbRouter from './src/routes/emails_cmdb.routes.js'
import whitelists_cmdbRouter from './src/routes/whitelists_cmdb.routes.js'
import directory_cmdbRouter from './src/routes/directory_cmdb.routes.js'
import resources_cmdbRouter from './src/routes/resources_cmdb.routes.js'
import biometrics_cmdbRouter from './src/routes/biometrics_cmdb.routes.js'
import laptops_cmdbRouter from './src/routes/laptops_cmdb.routes.js'
import extensions_cmdbRouter from './src/routes/extensions_cmdb.routes.js'
import mapsRouter from './src/routes/maps.routes.js'
import emailsAssetsRouter from './src/routes/emails_assets.routes.js'

const app = express()

app.use(cors())
app.use(express.json()) // procesa los datos del cliente "req.body" para leerlos en formato JSON

app.use(express.static('public'))

app.use(printersRouter)
app.use(catalogueRouter)
app.use(officeRouter)
app.use(computers_cmdbRouter)
app.use(emails_cmdbRouter)
app.use(whitelists_cmdbRouter)
app.use(directory_cmdbRouter)
app.use(resources_cmdbRouter)
app.use(biometrics_cmdbRouter)
app.use(laptops_cmdbRouter)
app.use(extensions_cmdbRouter)
app.use(mapsRouter)
app.use(emailsAssetsRouter)

app.listen(PORT, '0.0.0.0')
console.log(`server on running in port ${PORT}`)
