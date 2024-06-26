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

// origins

export const getOrigins = async(req, res) => {
  const query = 'SELECT * FROM origin_computers_cmdb ORDER BY `origin` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addOrigin = async({ body }, res) => {
  const { text } = body
  const query = 'INSERT INTO origin_computers_cmdb (`origin`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateOrigin = async({ body }, res) => {
  const { id, text } = body
  const query = 'UPDATE origin_computers_cmdb SET `origin` = ? WHERE `id_origin` = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteOrigin = async(req, res) => {
  const { id_origin } = req.query
  const query = 'DELETE FROM origin_computers_cmdb WHERE `id_origin` = ?'
  
  try {
    await pool.query(query, [id_origin])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }
}

// registers

const getIdArea = async(area) => {
  const [result] = await pool.query('SELECT `id_area` FROM areas_computers_cmdb WHERE `area` = ?', [area])
  return result[0].id_area
}

const getIdLicense = async(license) => {
  const [result] = await pool.query('SELECT `id_license` FROM licenses_computers_cmdb WHERE `license` = ?', [license])
  return result[0].id_license
}

const getIdModel = async(model) => {
  const [result] = await pool.query('SELECT `id_model` FROM models_computers_cmdb WHERE `model` = ?', [model])
  return result[0].id_model
}

export const getRegisters = async(req, res) => {
  const query = 'SELECT cmdb.id, cmdb.idMapa, cmdb.netBIOS, cmdb.IP, cmdb.mac, cmdb.ext, cmdb.hash, cmdb.nodo, cmdb.vlan, cmdb.staff, cmdb.kc_monitor, cmdb.kc_cpu, cmdb.serviceTag,areas_computers_cmdb.area,licenses_computers_cmdb.license,models_computers_cmdb.model,origin_computers_cmdb.origin FROM cmdb INNER JOIN areas_computers_cmdb ON cmdb.id_area = areas_computers_cmdb.id_area INNER JOIN licenses_computers_cmdb ON cmdb.id_license = licenses_computers_cmdb.id_license INNER JOIN models_computers_cmdb ON cmdb.id_model = models_computers_cmdb.id_model INNER JOIN origin_computers_cmdb ON cmdb.id_origin = origin_computers_cmdb.id_origin'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addRegister = async({ body }, res) => {
  const {
    idMapa,
    netBIOS,
    IP,
    mac,
    ext,
    hash,
    nodo,
    vlan,
    staff,
    serviceTag,
    kc_monitor,
    kc_cpu,
    area,
    license,
    model
  } = body

  const id_area = await getIdArea(area)
  const id_license = await getIdLicense(license)
  const id_model = await getIdModel(model)
  
  const query = 'INSERT INTO cmdb (idMapa, netBIOS, IP, mac, ext, hash, nodo, vlan, staff, serviceTag, kc_monitor, kc_cpu, id_area, id_license, id_model) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'

  const values = [idMapa, netBIOS, IP, mac, ext, hash, nodo, vlan, staff, serviceTag, kc_monitor, kc_cpu, id_area, id_license, id_model]

  try {
    await pool.query(query, values)
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateRegister = async({ body }, res) => {
  const {
    id,
    idMapa,
    netBIOS,
    IP,
    mac,
    ext,
    hash,
    nodo,
    vlan,
    staff,
    serviceTag,
    kc_monitor,
    kc_cpu,
    area,
    license,
    model
  } = body

  const id_area = await getIdArea(area)
  const id_license = await getIdLicense(license)
  const id_model = await getIdModel(model)

  const query = 'UPDATE cmdb SET idMapa = ?, netBIOS = ?, IP = ?, mac = ?, ext = ?, hash = ?, nodo = ?, vlan = ?, staff = ?, serviceTag = ?, kc_monitor = ?, kc_cpu = ?, id_area = ?, id_license = ?, id_model = ? WHERE id = ?'

  const values = [idMapa, netBIOS, IP, mac, ext, hash, nodo, vlan, staff, serviceTag, kc_monitor, kc_cpu, id_area, id_license, id_model, id]

  try {
    await pool.query(query, values)
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteRegister = async({ body }, res) => {
  const { id } = body
  const query = 'DELETE FROM cmdb WHERE id = ?'
  
  try {
    await pool.query(query, [id])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }
}