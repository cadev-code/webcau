import { pool } from '../db.js'

export const getResources = async(req, res) => {
  const query = 'SELECT * FROM resources_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error trying to obtain the information.')
  }
}

export const addResource = async(req, res) => {
  const { resource_name, capacity, permissions } = req.body
  const query = 'INSERT INTO resources_cmdb (`resource_name`, `capacity`, `permissions`) VALUES (?, ?, ?)'

  try {
    await pool.query(query, [resource_name, capacity, permissions])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateResource = async(req, res) => {
  const { id_resource, resource_name, capacity, permissions } = req.body
  const query = 'UPDATE resources_cmdb SET resource_name = ?, capacity = ?, permissions = ? WHERE id_resource = ?'

  try {
    await pool.query(query, [resource_name, capacity, permissions, id_resource])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteResource = async(req, res) => {
  const { id_resource } = req.body
  const query = 'DELETE FROM `id_resource` WHERE id_resource = ?'

  try {
    await pool.query(query, [id_resource])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying to delete the information.')
  }
}