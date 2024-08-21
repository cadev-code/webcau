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

export const addCampaign = async(req, res) => {
  const { text } = req.body
  const query = 'INSERT INTO campaigns_biometrics_cmdb (`campaign`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateCampaign = async(req, res) => {
  const { id, text } = req.body
  const query = 'UPDATE campaigns_biometrics_cmdb SET `campaign` = ? WHERE id_campaign = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteCampaign = async(req, res) => {
  const { id_campaign } = req.query
  const query = 'DELETE FROM campaigns_biometrics_cmdb WHERE id_campaign = ?'

  try {
    await pool.query(query, [id_campaign])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}