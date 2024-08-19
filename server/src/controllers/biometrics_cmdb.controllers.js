import { pool } from '../db.js'

export const getCampaigns = async(req, res) => {
  const query = 'SELECT * FROM campaigns_biometrics_cmdb'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}