import { pool } from '../db.js'

// areas emails

export const addArea = async({ body }, res) => {
  
  const { area } = body
  const query = 'INSERT INTO areas_emails_cmdb (`area`) VALUES (?)'

  try {
    await pool.query(query, [area])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }

}

export const getAreas = async(req, res) => {

  const query = 'SELECT * FROM areas_emails_cmdb ORDER BY `area` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateArea = async({ body }, res) => {
  
  const { id_area, area } = body
  const query = 'UPDATE areas_emails_cmdb SET `area` = ? WHERE id_area = ?'

  try {
    await pool.query(query, [area, id_area])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteArea = async(req, res) => {

  const { id_area } = req.query
  const query = 'DELETE FROM areas_emails_cmdb WHERE id_area = ?'
  
  try {
    await pool.query(query, [id_area])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}

// registers emails

// get id_area for add or update register
const getIdArea = async(area) => {
  const [result] = await pool.query('SELECT id_area FROM areas_emails_cmdb WHERE area = ?', [area])
  return result[0].id_area
}

export const addRegisterByArea = async({ body }, res) => {
  const { name, email, password, area } = body
  const id_area = await getIdArea(area)

  const query = 'INSERT INTO registers_emails_cmdb (`name`, `email`, `password`, `id_area`) VALUES (?,?,?,?)'
  
  try {
     await pool.query(query, [name, email, password, id_area])
     res.status(200).send('Information added correctly.')
   } catch (error) {
     res.status(400).send('There was an error trying to add the information.')
   }
}

export const getRegisters = async(req, res) => {
  
  const query = 'SELECT registers_emails_cmdb.id_register, registers_emails_cmdb.name, registers_emails_cmdb.email, registers_emails_cmdb.password, areas_emails_cmdb.area FROM registers_emails_cmdb INNER JOIN areas_emails_cmdb ON registers_emails_cmdb.id_area = areas_emails_cmdb.id_area'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const getRegistersByArea = async(req, res) => {

  const { id_area } = req.query
  const query = 'SELECT registers_emails_cmdb.id_register, registers_emails_cmdb.name, registers_emails_cmdb.email, registers_emails_cmdb.password, areas_emails_cmdb.area FROM registers_emails_cmdb INNER JOIN areas_emails_cmdb ON registers_emails_cmdb.id_area = areas_emails_cmdb.id_area WHERE registers_emails_cmdb.id_area = ?'

  try {
    const [result] = await pool.query(query, [id_area])
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateRegisterByArea = async({ body }, res) => {
  
  const { id_register, name, email, password, area } = body
  const id_area = await getIdArea(area)
  const query = 'UPDATE registers_emails_cmdb SET `name` = ?, `email` = ?, `password` = ?, `id_area` = ? WHERE id_register = ?'

  try {
    await pool.query(query, [name, email, password, id_area, id_register])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteRegisterByArea = async(req, res) => {

  const { id_register } = req.query
  const query = 'DELETE FROM registers_emails_cmdb WHERE id_register = ?'
  
  try {
    await pool.query(query, [id_register])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}