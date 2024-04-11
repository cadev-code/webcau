import { pool } from '../db.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const deleteImage = (filename) => {
  const pathFile = path.join(__dirname, '../../public/uploads', filename)
  
  if(fs.existsSync(pathFile)) {
    fs.unlinkSync(pathFile)
  } 
}

export const getMaps = async(req, res) => {
  try {
    const [result] = await pool.query('select * from maps')
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send('There was an error while trying to obtain the information.')
  }
}

export const uploadMap = async(req, res) => {
  const { text, path: filename } = req.body
  if(req.fileValidationError) {
    return res.status(400).send(req.fileValidationError)
  }

  try {
    const [result] = await pool.query('INSERT INTO maps (text, path) values (?,?)', [text, filename])
    res.send(result)
  } catch (error) {
    const pathFile = path.join(__dirname, '../../public/uploads', filename)

    fs.existsSync(pathFile) &&
      fs.unlinkSync(pathFile)
    
    res.status(400).send('There was an error trying to load the image.')
  }
}

export const updateMap = async(req, res) => {
  if(req.body.path && req.body.text) {
    const { id, text, path, beforePath } = req.body
    try {
      await pool.query('UPDATE maps SET text = ?, path = ? WHERE id = ?', [text, path, id])
      if(path !== beforePath) {
        await deleteImage(beforePath)
      }
      res.status(200).send('The data was loaded successfully.')
    } catch (error) {
      res.status(400).send('There was an error trying to load the information.')
    }
  } else if(req.body.text) {
    const { id, text } = req.body
    try {
      await pool.query('UPDATE maps SET text = ? WHERE id = ?', [text, id])
      res.status(200).send('The data was loaded successfully.')
    } catch (error) {
      res.status(400).send('There was an error trying to load the information.')
    }
  } else {
    const { id, path, beforePath } = req.body
    try {
      await pool.query('UPDATE maps SET path = ? WHERE id = ?', [path, id])
      if(path !== beforePath) {
        await deleteImage(beforePath)
      }
      res.status(200).send('The data was loaded successfully.')
    } catch (error) {
      res.status(400).send('There was an error trying to load the information.')      
    }
  }
}

export const deleteMap = async(req, res) => {
  const { id, path } = req.query
  try {
    await pool.query('DELETE FROM maps WHERE id = ?', [id])
    await deleteImage(path)
    res.status(200).send('The data was successfully deleted.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the data.')
  }
}

export const getMapOrder = async(req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM maps_order')
    res.send(result[0].orderArr)
  } catch (error) {
    res.status(400).send('There was an error while trying to obtain the information.')
  }
}

export const updateMapOrder = async(req, res) => {
  const { order } = req.body
  console.log(order)
  try {
    await pool.query('UPDATE maps_order set orderArr = ? WHERE id = 1', [order])
    res.status(200).send('Data saved correctly.')
  } catch (error) {
    res.status(400).send('Error when trying to update information.')
  }
}