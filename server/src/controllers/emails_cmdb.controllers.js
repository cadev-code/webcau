import { pool } from '../db.js'

export const getAreas = async(req, res) => {

  const [result] = await pool.query('SELECT * FROM areas_emails_cmdb')
  res.send(result)

}