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

// users

export const getUsers = async(req, res) => {
  const query = 'SELECT users_directory_cmdb.id_user, users_directory_cmdb.name, users_directory_cmdb.user, users_directory_cmdb.user_x, users_directory_cmdb.status, domains_directory_cmdb.domain, uo_directory_cmdb.uo, areas_directory_cmdb.area FROM users_directory_cmdb INNER JOIN domains_directory_cmdb ON users_directory_cmdb.id_domain = domains_directory_cmdb.id_domain INNER JOIN uo_directory_cmdb ON users_directory_cmdb.id_uo = uo_directory_cmdb.id_uo INNER JOIN areas_directory_cmdb ON users_directory_cmdb.id_area = areas_directory_cmdb.id_area ORDER BY users_directory_cmdb.id_user ASC'

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

export const addUser = async(req, res) => {
  const { name, user, user_x, status, domain, uo, area } = req.body
  const id_domain = await getIdDomain(domain)
  const id_uo = await getIdUO(uo)
  const id_area = await getIdArea(area)

  const query = 'INSERT INTO users_directory_cmdb (name, user, user_x, status, id_domain, id_uo, id_area) VALUES (?,?,?,?,?,?,?)'

  try {
    await pool.query(query, [name, user, user_x, status, id_domain, id_uo, id_area])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to add the information.')
  }
}

export const updateUser = async(req, res) => {
  const { id_user, name, user, user_x, status, domain, uo, area } = req.body
  const id_domain = await getIdDomain(domain)
  const id_uo = await getIdUO(uo)
  const id_area = await getIdArea(area)

  const query = 'UPDATE users_directory_cmdb SET name = ?, user = ?, user_x = ?, status = ?, id_domain = ?, id_uo = ?, id_area = ? WHERE id_user = ?'

  try {
    await pool.query(query, [name, user, user_x, status, id_domain, id_uo, id_area, id_user])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    console.log(error)
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteUser = async(req, res) => {
  const { id_user } = req.body

  const query = 'DELETE FROM users_directory_cmdb WHERE id_user = ?'

  try {
    await pool.query(query, [id_user])
    res.status()
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}