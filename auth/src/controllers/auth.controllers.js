import { pool } from '../db.js'
import jwt from 'jsonwebtoken'

export const getUser = async(req, res) => {

  const { username, password } = req.query

  const [result] = await pool.query(
    'SELECT * FROM users WHERE username = ? AND password = ?', 
    [username, password]
  )

  if(result.length !== 0) {
    const { username, permissions, agent } = result[0]

    const token = jwt.sign({username, permissions, agent }, 'secretSession', { expiresIn: '24h' })

    res.json([{
      token,
      username,
      permissions,
      agent
    }])
    return
  }

  res.json(result)
}

export const getAuthenticatedUser = (req, res) => {
  const { token } = req.query

  try {
    const verify = jwt.verify(token, 'secretSession') || []
    res.json(verify)
  } catch (error) {
    res.send([])
  }
}