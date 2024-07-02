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