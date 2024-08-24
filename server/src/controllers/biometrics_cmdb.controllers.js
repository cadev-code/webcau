import { pool } from '../db.js'

// camapigns

export const getCampaigns = async(req, res) => {
  const query = 'SELECT * FROM campaigns_biometrics_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addCampaign = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO campaigns_biometrics_cmdb (`campaign`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateCampaign = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE campaigns_biometrics_cmdb SET `campaign` = ? WHERE id_campaign = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteCampaign = async(req, res) => {
  const { id_campaign } = req.query
  const query = 'DELETE FROM campaigns_biometrics_cmdb WHERE id_campaign = ?'

  try {
    await pool.query(query, [id_campaign])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// marks

export const getMarks = async(req, res) => {
  const query = 'SELECT * FROM marks_biometrics_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addMark = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO marks_biometrics_cmdb (`mark`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateMark = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE marks_biometrics_cmdb SET `mark` = ? WHERE `id_mark` = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteMark = async(req, res) => {
  const { id_mark } = req.query
  const query = 'DELETE FROM marks_biometrics_cmdb WHERE `id_mark` = ?'

  try {
    await pool.query(query, [id_mark])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// models

export const getModels = async(req, res) => {
  const query = 'SELECT * FROM models_biometrics_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addModel = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO models_biometrics_cmdb (`model`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateModel = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE models_biometrics_cmdb SET `model` = ? WHERE `id_model` = ?'
  
  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteModel = async(req, res) => {
  const { id_model } = req.query
  const query = 'DELETE FROM models_biometrics_cmdb WHERE `id_model` = ?'
  
  try {
    await pool.query(query, [id_model])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// assignments

export const getAssignments = async(req, res) => {
  const query = 'SELECT * FROM assignments_biometrics_cmdb'
  
  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch(error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addAssignment = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO assignments_biometrics_cmdb (`assignment`) VALUES (?)'
  
  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateAssignment = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE assignments_biometrics_cmdb SET `assignment` = ? WHERE `id_assignment` = ?'
  
  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteAssignment = async(req, res) => {
  const { id_assignment } = req.query
  const query = 'DELETE FROM assignments_biometrics_cmdb WHERE id_assignment = ?'
  
  try {
    await pool.query(query, [id_assignment])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// devices

// get ID's
const getIdAssignment = async(assignment) => {
  const [result] = await pool.query('SELECT `id_assignment` FROM assignments_biometrics_cmdb WHERE assignment = ?', [assignment])
  return result[0].id_assignment
}
const getIdCampaign = async(campaign) => {
  const [result] = await pool.query('SELECT `id_campaign` FROM campaigns_biometrics_cmdb WHERE `campaign` = ?', [campaign])
  return result[0].id_campaign
}
const getIdMark = async(mark) => {
  const [result] = await pool.query('SELECT `id_mark` FROM marks_biometrics_cmdb WHERE `mark` = ?', [mark])
  return result[0].id_mark
}
const getIdModel = async(model) => {
  const [result] = await pool.query('SELECT `id_model` FROM models_biometrics_cmdb WHERE `model` = ?', [model])
  return result[0].id_model
}

export const getDevices = async(req, res) => {
  const query = 'SELECT devices_biometrics_cmdb.id_device, assignments_biometrics_cmdb.assignment, campaigns_biometrics_cmdb.campaign, marks_biometrics_cmdb.mark, models_biometrics_cmdb.model, devices_biometrics_cmdb.serial_number, devices_biometrics_cmdb.ip, devices_biometrics_cmdb.mac, devices_biometrics_cmdb.user, devices_biometrics_cmdb.password FROM devices_biometrics_cmdb INNER JOIN assignments_biometrics_cmdb ON devices_biometrics_cmdb.id_assignment = assignments_biometrics_cmdb.id_assignment INNER JOIN campaigns_biometrics_cmdb ON devices_biometrics_cmdb.id_campaign = campaigns_biometrics_cmdb.id_campaign INNER JOIN marks_biometrics_cmdb ON devices_biometrics_cmdb.id_mark = marks_biometrics_cmdb.id_mark INNER JOIN models_biometrics_cmdb ON devices_biometrics_cmdb.id_model = models_biometrics_cmdb.id_model'
  
  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch(error) {
    res.status(400).send('There was an error to trying obtain the information')
  }
}

export const addDevice = async(req, res) => {
  const { assignment, campaign, mark, model, serial_number, ip, mac, user, password } = req.body
  const id_assignment = await getIdAssignment(assignment)
  const id_campaign = await getIdCampaign(campaign)
  const id_mark = await getIdMark(mark)
  const id_model = await getIdModel(model)

  const query = 'INSERT INTO devices_biometrics_cmdb (`id_assignment`, `id_campaign`, `id_mark`, `id_model`, `serial_number`, `ip`, `mac`, `user`, `password`) VALUES (?,?,?,?,?,?,?,?,?)'
  
  try {
    await pool.query(query, [id_assignment, id_campaign, id_mark, id_model, serial_number, ip, mac, user, password])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateDevice = async(req, res) => {
  const { id_device, assignment, campaign, mark, model, serial_number, ip, mac, user, password } = req.body
  const id_assignment = await getIdAssignment(assignment)
  const id_campaign = await getIdCampaign(campaign)
  const id_mark = await getIdMark(mark)
  const id_model = await getIdModel(model)

  const query = 'UPDATE devices_biometrics_cmdb SET `id_assignment` = ?, `id_campaign` = ?, `id_mark` = ?, `id_model` = ?, `serial_number` = ?, `ip` = ?, `mac` = ?, `user` = ?, `password` = ? WHERE `id_device` = ?'
  
  try {
    await pool.query(query, [id_assignment, id_campaign, id_mark, id_model, serial_number, ip, mac, user, password, id_device])
    res.status(200).send('Information updated correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteDevice = async(req, res) => {
  const { id_device } = req.body
  const query = 'DELETE FROM devices_biometrics_cmdb WHERE id_device = ?'
  
  try {
    await pool.query(query, [id_device])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}