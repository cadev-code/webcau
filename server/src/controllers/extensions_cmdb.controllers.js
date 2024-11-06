import { pool } from '../db.js'

// areas

export const getAreas = async(req, res) => {
  const query = 'SELECT * FROM areas_extensions_cmdb'
  
  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch(error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addArea = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO areas_extensions_cmdb (`area`) VALUES (?)'
  
  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateArea = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE areas_extensions_cmdb SET `area` = ? WHERE `id_area` = ?'
  
  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteArea = async(req, res) => {
  const { id_area } = req.query
  const query = 'DELETE FROM areas_extensions_cmdb WHERE `id_area` = ?'
  
  try {
    await pool.query(query, [id_area])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// types

export const getTypes = async(req, res) => {
  const query = 'SELECT * FROM types_extensions_cmdb'
  
  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch(error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addType = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO types_extensions_cmdb (`type`) VALUES (?)'
  
  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateType = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE types_extensions_cmdb SET `type` = ? WHERE `id_type` = ?'
  
  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteType = async(req, res) => {
  const { id_type } = req.query
  const query = 'DELETE FROM types_extensions_cmdb WHERE `id_type` = ?'
  
  try {
    await pool.query(query, [id_type])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// sites

export const getSites = async(req, res) => {
  const query = 'SELECT * FROM sites_extensions_cmdb'
  
  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch(error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addSite = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO sites_extensions_cmdb (`site`) VALUES (?)'
  
  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateSite = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE sites_extensions_cmdb SET `site` = ? WHERE `id_site` = ?'
  
  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteSite = async(req, res) => {
  const { id_site } = req.query
  const query = 'DELETE FROM sites_extensions_cmdb WHERE `id_site` = ?'
  
  try {
    await pool.query(query, [id_site])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// extensions
const getIdArea = async(area) => {
  const [result] = await pool.query('SELECT `id_area` FROM areas_extensions_cmdb WHERE `area` = ?', [area])
  return result[0].id_area
}

const getIdType = async(type) => {
  const [result] = await pool.query('SELECT `id_type` FROM types_extensions_cmdb WHERE `type` = ?', [type])
  return result[0].id_type
}

const getIdSite = async(site) => {
  const [result] = await pool.query('SELECT `id_site` FROM sites_extensions_cmdb WHERE `site` = ?', [site])
  return result[0].id_site
}

export const getExtensions = async(req, res) => {
  const query = 'SELECT extensions_cmdb.`id_extension`, extensions_cmdb.`name`, areas_extensions_cmdb.`area`, types_extensions_cmdb.`type`, extensions_cmdb.`extension_number`, sites_extensions_cmdb.`site`, extensions_cmdb.`ticket` FROM extensions_cmdb INNER JOIN areas_extensions_cmdb ON extensions_cmdb.`id_area` = areas_extensions_cmdb.`id_area` INNER JOIN types_extensions_cmdb ON extensions_cmdb.`id_type` = types_extensions_cmdb.`id_type` INNER JOIN sites_extensions_cmdb ON extensions_cmdb.`id_site` = sites_extensions_cmdb.`id_site` ORDER BY extensions_cmdb.`id_extension` DESC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addExtension = async(req, res) => {
  const { name, area, type, extension_number, site, ticket } = req.body
  console.log(req.body)

  const id_area = await getIdArea(area)
  const id_type = await getIdType(type)
  const id_site = await getIdSite(site)

  const query = 'INSERT INTO extensions_cmdb (`name`, `id_area`, `id_type`, `extension_number`, `id_site`, `ticket`) VALUES (?,?,?,?,?,?)'

  try {
    await pool.query(query, [name, id_area, id_type, extension_number, id_site, ticket])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateExtension = async(req, res) => {
  const { id_extension, name, area, type, extension_number, site, ticket } = req.body

  const id_area = await getIdArea(area)
  const id_type = await getIdType(type)
  const id_site = await getIdSite(site)

  const query = 'UPDATE extensions_cmdb SET `name` = ?, `id_area` = ?, `id_type` = ?, `extension_number` = ?, `id_site` = ?, `ticket` = ? WHERE `id_extension` = ?'

  try {
    await pool.query(query, [name, id_area, id_type, extension_number, id_site, ticket, id_extension])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteExtension = async(req, res) => {
  const { id_extension } = req.body
  const query = 'DELETE FROM extensions_cmdb WHERE `id_extension` = ?'
  
  try {
    await pool.query(query, [id_extension])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}