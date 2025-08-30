import { Router } from 'express';
import {
  addArea,
  addEmailToList,
  addList,
  addRegister,
  addSite,
  deleteArea,
  deleteList,
  deleteRegisterByArea,
  deleteSite,
  getAreas,
  getLists,
  getRegisterLists,
  getRegisters,
  getSites,
  removeMailFromList,
  updateArea,
  updateList,
  updateRegisterByArea,
  updateSite,
} from '../controllers/emails_base.controllers.js';

const router = Router();

router.get('/cmdb/base/emails/areas', getAreas);
router.post('/cmdb/base/emails/areas', addArea);
router.put('/cmdb/base/emails/areas', updateArea);
router.delete('/cmdb/base/emails/areas', deleteArea);

router.get('/cmdb/base/emails/sites', getSites);
router.post('/cmdb/base/emails/sites', addSite);
router.put('/cmdb/base/emails/sites', updateSite);
router.delete('/cmdb/base/emails/sites', deleteSite);

router.get('/cmdb/base/emails/lists', getLists);
router.post('/cmdb/base/emails/lists', addList);
router.put('/cmdb/base/emails/lists', updateList);
router.delete('/cmdb/base/emails/lists', deleteList);

router.get('/cmdb/base/emails/registers/all', getRegisters);
router.post('/cmdb/base/emails/registers', addRegister);
router.put('/cmdb/base/emails/registers', updateRegisterByArea);
router.delete('/cmdb/base/emails/registers', deleteRegisterByArea);

router.get('/cmdb/base/emails/register/lists', getRegisterLists)
router.post('/cmdb/base/emails/register/list', addEmailToList)
router.delete('/cmdb/base/emails/register/list', removeMailFromList)

export default router;
