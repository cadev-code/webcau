import { pool } from '../db.js'

// zones

export const getZones = async(req, res) => {
  const query = 'SELECT * FROM zones_whitelists_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addZone = async(req, res) => {
  const { zone } = req.body
  const query = 'INSERT INTO zones_whitelists_cmdb (`zone`) VALUES (?)'

  try {
    const [result] = await pool.query(query, [zone])
    res.status(200).json({ id_zone: result.insertId })
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateZone = async(req, res) => {
  const { id_zone, zone } = req.body
  const query = 'UPDATE zones_whitelists_cmdb SET zone = ? WHERE id_zone = ?'

  try {
    await pool.query(query, [zone, id_zone])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteZone = async(req, res) => {
  const { id_zone } = req.query
  const query = 'DELETE FROM zones_whitelists_cmdb WHERE id_zone = ?'
  
  try {
    await pool.query(query, [id_zone])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }
}

// computers

export const getComputers = async(req, res) => {
  const { id_zone } = req.body
  const query = 'SELECT * FROM computers_whitelists_cmdb WHERE id_zone = ?'

  try {
    const [result] = await pool.query(query, [id_zone])
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addComputer = async(req, res) => {
  const { netbios, email, id_zone } = req.body
  const query = 'INSERT INTO computers_whitelists_cmdb (`netbios`, `email`, `id_zone`) VALUES (?,?,?)'

  try {
    await pool.query(query, [netbios, email, id_zone])
    res.status(200).send('The information was loaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const updateComputer = async(req, res) => {
  const { id_computer, netbios, email } = req.body
  const query = 'UPDATE computers_whitelists_cmdb SET netbios = ?, email = ? WHERE id_computer = ?'

  try {
    await pool.query(query, [netbios, email, id_computer])
    res.status(200).send('The information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteComputer = async(req, res) => {
  const { id_computer } = req.query
  const query = 'DELETE FROM computers_whitelists_cmdb WHERE id_computer = ?'

  try {
    await pool.query(query, [id_computer])
    res.status(200).send('The information was deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}

// local emails

export const getLocalEmails = async(req, res) => {
  
}

export const addLocalEmail = async(req, res) => {

}

export const updateLocalEmail = async(req, res) => {

}

export const deleteLocalEmail = async(req, res) => {

}

// customers emails

export const getCustomersEmails = async(req, res) => {

}

export const addCustomerEmail = async(req, res) => {

}

export const updateCustomerEmail = async(req, res) => {

}

export const deleteCustomerEmail = async(req, res) => {

}