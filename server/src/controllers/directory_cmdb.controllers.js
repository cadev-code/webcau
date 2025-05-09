import { pool } from '../db.js'

// uo

export const getUO = async(req, res) => {
  const query = 'SELECT * FROM uo_directory_cmdb ORDER BY `uo` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addUO = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO uo_directory_cmdb (`uo`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateUO = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE uo_directory_cmdb SET `uo` =? WHERE id_uo = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to upadate the information.')
  }
}

export const deleteUO = async(req, res) => {
  const { id_uo } = req.query
  const query = 'DELETE FROM uo_directory_cmdb WHERE id_uo =?'

  try {
    await pool.query(query, [id_uo])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}

// areas

export const getAreas = async(req, res) => {
  const query = 'SELECT * FROM areas_directory_cmdb ORDER BY `area` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addArea = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO areas_directory_cmdb (`area`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateArea = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE areas_directory_cmdb SET `area` =? WHERE id_area = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to upadate the information.')
  }
}

export const deleteArea = async(req, res) => {
  const { id_area } = req.query
  const query = 'DELETE FROM areas_directory_cmdb WHERE id_area =?'

  try {
    await pool.query(query, [id_area])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}

// domains

export const getDomains = async(req, res) => {
  const query = 'SELECT * FROM domains_directory_cmdb ORDER BY `domain` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addDomain = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO domains_directory_cmdb (`domain`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateDomain = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE domains_directory_cmdb SET `domain` =? WHERE id_domain = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to upadate the information.')
  }
}

export const deleteDomain = async(req, res) => {
  const { id_domain } = req.query
  const query = 'DELETE FROM domains_directory_cmdb WHERE id_domain =?'

  try {
    await pool.query(query, [id_domain])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}

// positions

export const getPositions = async(req, res) => {
  const query = 'SELECT * FROM positions_directory_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(200).send('There was an error trying to obtain the information.')
  }
}

export const addPosition = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO positions_directory_cmdb (`position`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to upload the information.')
  }
}

export const updatePosition = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE positions_directory_cmdb SET `position` = ? WHERE `id_position` = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deletePosition = async(req, res) => {
  const { id_position } = req.query
  const query = 'DELETE FROM positions_directory_cmdb WHERE `id_position` = ?'

  try {
    await pool.query(query, [id_position])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}

// users

export const getUsers = async(req, res) => {
  const query = 'SELECT users_directory_cmdb.id_user, users_directory_cmdb.name, users_directory_cmdb.user, users_directory_cmdb.user_x, users_directory_cmdb.status, domains_directory_cmdb.domain, uo_directory_cmdb.uo, areas_directory_cmdb.area, positions_directory_cmdb.position FROM users_directory_cmdb INNER JOIN domains_directory_cmdb ON users_directory_cmdb.id_domain = domains_directory_cmdb.id_domain INNER JOIN uo_directory_cmdb ON users_directory_cmdb.id_uo = uo_directory_cmdb.id_uo INNER JOIN areas_directory_cmdb ON users_directory_cmdb.id_area = areas_directory_cmdb.id_area INNER JOIN positions_directory_cmdb ON users_directory_cmdb.id_position = positions_directory_cmdb.id_position ORDER BY users_directory_cmdb.id_user ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

const getIdDomain = async(domain) => {
  const [result] = await pool.query('SELECT `id_domain` FROM domains_directory_cmdb WHERE `domain` = ?', [domain])
  return result[0].id_domain
}

const getIdUO = async(uo) => {
  const [result] = await pool.query('SELECT `id_uo` FROM uo_directory_cmdb WHERE `uo` = ?', [uo])
  return result[0].id_uo
}

const getIdArea = async(area) => {
  const [result] = await pool.query('SELECT `id_area` FROM areas_directory_cmdb WHERE `area` = ?', [area])
  return result[0].id_area
}

const getIdPosition = async(position) => {
  const [result] = await pool.query('SELECT `id_position` FROM positions_directory_cmdb WHERE `position` = ?', [position])
  return result[0].id_position
}

export const addUser = async(req, res) => {
  const { name, user, user_x, status, domain, uo, area, position } = req.body
  const id_domain = await getIdDomain(domain)
  const id_uo = await getIdUO(uo)
  const id_area = await getIdArea(area)
  const id_position = await getIdPosition(position)

  const query = 'INSERT INTO users_directory_cmdb (name, user, user_x, status, id_domain, id_uo, id_area, id_position) VALUES (?,?,?,?,?,?,?,?)'

  try {
    await pool.query(query, [name, user, user_x, status, id_domain, id_uo, id_area, id_position])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to add the information.')
  }
}

export const updateUser = async(req, res) => {
  const { id_user, name, user, user_x, status, domain, uo, area, position } = req.body
  const id_domain = await getIdDomain(domain)
  const id_uo = await getIdUO(uo)
  const id_area = await getIdArea(area)
  const id_position = await getIdPosition(position)

  const query = 'UPDATE users_directory_cmdb SET name = ?, user = ?, user_x = ?, status = ?, id_domain = ?, id_uo = ?, id_area = ?, id_position = ? WHERE id_user = ?'

  try {
    await pool.query(query, [name, user, user_x, status, id_domain, id_uo, id_area, id_position, id_user])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    console.log(error)
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteUser = async(req, res) => {
  const { id_user } = req.body

  try {
    await pool.query('DELETE FROM resources_directory_cmdb WHERE id_user = ?', [id_user])
    await pool.query('DELETE FROM users_directory_cmdb WHERE id_user = ?', [id_user])
    res.status(200).send('Information was deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}

// resources_directory
export const getResources = async(req, res) => {
  const query = 'SELECT `id_resource`, `resource_name` FROM resources_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error trying to obtain the information.')   
  }
}

export const getUserResources = async(req, res) => {
  const { id_user } = req.query
  const query = 'SELECT resources_directory_cmdb.id, resources_cmdb.resource_name, resources_directory_cmdb.permissions FROM resources_directory_cmdb INNER JOIN resources_cmdb ON resources_directory_cmdb.id_resource = resources_cmdb.id_resource WHERE id_user = ?'

  try {
    const [result] = await pool.query(query, [id_user])
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error trying to obtain the information.')
  }
}

export const addUserResource = async(req, res) => {
  const { id_user, id_resource, permissions } = req.body
  const query = 'INSERT INTO resources_directory_cmdb (id_user, id_resource, permissions) VALUES (?,?,?)'

  try {
    await pool.query(query, [id_user, id_resource, permissions])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error to load the information.')
  }
}

export const updateUserResource = async(req, res) => {
  const { id, permissions } = req.body
  const query = 'UPDATE resources_directory_cmdb SET permissions = ? WHERE id = ?'

  try {
    await pool.query(query, [permissions, id])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteUserResource = async(req, res) => {
  const { id } = req.query
  const query = 'DELETE FROM resources_directory_cmdb WHERE id = ?'

  try {
    await pool.query(query, [id])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}