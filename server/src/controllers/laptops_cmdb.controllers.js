import { pool } from '../db.js'

// areas

export const getAreas = async(req, res) => {
  const query = 'SELECT * FROM areas_laptops_cmdb'
  
  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch(error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addArea = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO areas_laptops_cmdb (`area`) VALUES (?)'
  
  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateArea = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE areas_laptops_cmdb SET `area` = ? WHERE `id_area` = ?'
  
  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch(error) {
    console.log(error)
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteArea = async(req, res) => {
  const { id_area } = req.query
  const query = 'DELETE FROM areas_laptops_cmdb WHERE `id_area` = ?'

  try {
    await pool.query(query, id_area)
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// marks

export const getMarks = async(req, res) => {
  const query = 'SELECT * FROM marks_laptops_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addMark = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO marks_laptops_cmdb (`mark`) VALUES (?)'
  
  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateMark = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE marks_laptops_cmdb SET `mark` = ? WHERE `id_mark` = ?'
  
  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteMark = async(req, res) => {
  const { id_mark } = req.query
  const query = 'DELETE FROM marks_laptops_cmdb WHERE `id_mark` = ?'
  
  try {
    await pool.query(query, [id_mark])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying deleted the information.')
  }
}