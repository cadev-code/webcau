import { pool } from '../db.js'

// areas

export const getAreas = async(req, res) => {
  const query = 'SELECT * FROM areas_resources_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send('There was an error to trying to obtain information.')
  }
}

export const addArea = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO areas_resources_cmdb (`area`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying to load the information.')
  }
}

export const updateArea = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE areas_resources_cmdb SET area = ? WHERE id_area = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteArea = async(req, res) => {
  const { id_area } = req.query
  const query = 'DELETE FROM areas_resources_cmdb WHERE id_area = ?'

  try {
    await pool.query(query, [id_area])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error to delete information.')
  }
}

// files
export const getFiles = async(req, res) => {
  const {id_resource} = req.query
  const query = 'SELECT * FROM files_resources_cmdb WHERE `id_resource` = ?'

  try {
    const [result] = await pool.query(query, [id_resource])
    res.status(200).json(result)
  } catch (error) {
    res.statud(400).send('There was an error trying obtain the information.')
  }
}

export const addFile = async(req, res) => {
  const { filename, type, id_resource } = req.body
  const query = 'INSERT INTO files_resources_cmdb (`filename`, `type`, `id_resource`) VALUES (?,?,?)'

  try {
    await pool.query(query, [filename, type, id_resource])
    res.status(200).send('Information loaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateFile = async(req, res) => {
  const { id_file, filename } = req.body
  const query = 'UPDATE files_resources_cmdb SET `filename` = ?  WHERE id_file = ?'

  try {
    await pool.query(query, [filename, id_file])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteFile = async(req, res) => {
  const { id_file } = req.query
  const query = 'DELETE FROM files_resources_cmdb WHERE id_file =?'

  try {
    await pool.query(query, [id_file])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}

// resources

export const getResources = async(req, res) => {
  const query = 'SELECT resources_cmdb.id_resource, resources_cmdb.resource_name, resources_cmdb.capacity, areas_resources_cmdb.area FROM resources_cmdb INNER JOIN areas_resources_cmdb ON resources_cmdb.id_area = areas_resources_cmdb.id_area'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error trying to obtain the information.')
  }
}

const getIdArea = async(area) => {
  const [result] = await pool.query('SELECT `id_area` FROM areas_resources_cmdb WHERE `area` = ?', [area])
  return result[0].id_area
}

export const addResource = async(req, res) => {
  const { resource_name, capacity, area } = req.body
  const query = 'INSERT INTO resources_cmdb (`resource_name`, `capacity`, `id_area`) VALUES (?, ?, ?)'
  const id_area = await getIdArea(area)

  try {
    await pool.query(query, [resource_name, capacity, id_area])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateResource = async(req, res) => {
  const { id_resource, resource_name, capacity, area } = req.body
  const query = 'UPDATE resources_cmdb SET resource_name = ?, capacity = ?, id_area = ? WHERE id_resource = ?'
  const id_area = await getIdArea(area)

  try {
    await pool.query(query, [resource_name, capacity, id_area, id_resource])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteResource = async(req, res) => {
  const { id_resource } = req.body
  const query = 'DELETE FROM resources_cmdb WHERE id_resource = ?'

  try {
    await pool.query(query, [id_resource])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying to delete the information.')
  }
}