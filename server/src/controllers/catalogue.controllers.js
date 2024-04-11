import { pool } from '../db.js'

export const getCatalogue = async(req, res) => {
  const [result] = await pool.query('SELECT * FROM catalogue')

  res.json(result)
}