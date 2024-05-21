import { pool } from '../db.js'

// areas computers

export const getAreas = async(req, res) => {
  const query = 'SELECT * FROM areas_computers_cmdb ORDER BY `area` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addArea = async({ body }, res) => {
  const { text } = body
  const query = 'INSERT INTO areas_computers_cmdb (`area`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateArea = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE areas_computers_cmdb SET `area` = ? WHERE `id_area` = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteArea = async(req, res) => {

  const { id_area } = req.query
  const query = 'DELETE FROM areas_computers_cmdb WHERE `id_area` = ?'
  
  try {
    await pool.query(query, [id_area])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}

// licenses

export const getLicenses = async(req, res) => {
  const query = 'SELECT * FROM licenses_computers_cmdb ORDER BY `license` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addLicense = async({ body }, res) => {
  const { text } = body
  const query = 'INSERT INTO licenses_computers_cmdb (`license`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateLicense = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE licenses_computers_cmdb SET `license` = ? WHERE `id_license` = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteLicense = async(req, res) => {

  const { id_license } = req.query
  const query = 'DELETE FROM licenses_computers_cmdb WHERE `id_license` = ?'
  
  try {
    await pool.query(query, [id_license])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}

// models

export const getModels = async(req, res) => {
  const query = 'SELECT * FROM models_computers_cmdb ORDER BY `model` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addModel = async({ body }, res) => {
  const { text } = body
  const query = 'INSERT INTO models_computers_cmdb (`model`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateModel = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE models_computers_cmdb SET `model` = ? WHERE `id_model` = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteModel = async(req, res) => {

  const { id_model } = req.query
  const query = 'DELETE FROM models_computers_cmdb WHERE `id_model` = ?'
  
  try {
    await pool.query(query, [id_model])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}

// registers

export const getRegister = async(req, res) => {
  const query = ''
}

export const addRegister = async({ body }, res) => {
  const query = 'INSERT INTO cmdb (idMapa, netBIOS, IP, mac, ext, hash, nodo, licSiph, vlan, staff, model, serviceTag, area, kc_monitor, kc_cpu) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  const values = [body.idMapa, body.netBIOS, body.IP, body.mac, body.ext, body.hash, body.nodo, body.licSiph, body.vlan, body.staff, body.model, body.serviceTag, body.area, body.kc_monitor, body.kc_cpu]

  try {
    const [addResult] = await pool.query(query, values)
    const [getResult] = await pool.query('SELECT * FROM cmdb WHERE id = ?', [addResult.insertId])
    res.status(200).json(getResult)
  } catch (error) {
    res.status(400).send('Error when trying to add data.')
  }
}

export const updateRegister = async({ body }, res) => {
  const query = 'UPDATE cmdb SET idMapa = ?, netBIOS = ?, IP = ?, mac = ?, ext = ?, hash = ?, nodo = ?, licSiph = ?, vlan = ?, staff = ?, model = ?, serviceTag = ?, area = ?, kc_monitor = ?, kc_cpu = ? WHERE id = ?'
  const values = [body.idMapa, body.netBIOS, body.IP, body.mac, body.ext, body.hash, body.nodo, body.licSiph, body.vlan, body.staff, body.model, body.serviceTag, body.area, body.kc_monitor, body.kc_cpu, body.id]

  try {
    await pool.query(query, values)
    const [result] = await pool.query('SELECT * FROM cmdb WHERE id = ?', [body.id])
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error updating the data.')
  }
}

export const deleteRegister = async({ params }, res) => {
  const { id } = params
  
  try {
    await pool.query('DELETE FROM cmdb WHERE id = ?', [id])
    res.status(200).send('The data was successfully deleted.')
  } catch (error) {
    res.status(400).send('Error when trying to delete data.')
  }
}