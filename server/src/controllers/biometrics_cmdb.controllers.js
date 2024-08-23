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