import { pool } from '../db.js'

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