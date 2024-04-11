import { Router } from 'express'
import { 
  addLicense, 
  addUser, 
  deleteLicense, 
  deleteUser, 
  deleteUsersByLicense, 
  editLicense, 
  editUser, 
  getLicense, 
  getLicenses, 
  getUsers, 
  getUsersByName, 
  updateAmountLicense 
} from '../controllers/office.controllers.js'

const router = Router()

// licenses
router.get('/office/licenses', getLicenses)
router.get('/office/license/:id', getLicense)
router.post('/office/licenses/add', addLicense)
router.put('/office/licenses/edit/:id', editLicense)
router.delete('/office/licenses/delete/:id', deleteLicense)
router.put('/office/licenses/amount_update/:id', updateAmountLicense)

// users
router.get('/office/users/:idLicense', getUsers)
router.get('/office/users/search/:name', getUsersByName)
router.post('/office/users/add', addUser)
router.put('/office/users/edit/:id', editUser)
router.delete('/office/users/delete/:id', deleteUser)
router.delete('/office/users/delete_license/:id', deleteUsersByLicense)

export default router