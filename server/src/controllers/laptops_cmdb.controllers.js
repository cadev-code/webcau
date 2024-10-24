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

// laptops
const getIdArea = async(area) => {
  const [result] = await pool.query('SELECT `id_area` FROM areas_laptops_cmdb WHERE `area` = ?', [area])
  return result[0].id_area
}
const getIdMark = async(mark) => {
  const [result] = await pool.query('SELECT `id_mark` FROM marks_laptops_cmdb WHERE `mark` = ?', [mark])
  return result[0].id_mark
}

export const getLatptops = async(req, res) => {
  const query = 'SELECT laptops_cmdb.`id_laptop`, areas_laptops_cmdb.`area`, laptops_cmdb.`name`, marks_laptops_cmdb.`mark`, laptops_cmdb.`model`, laptops_cmdb.`st`, laptops_cmdb.`device` FROM laptops_cmdb INNER JOIN areas_laptops_cmdb ON laptops_cmdb.`id_area` = areas_laptops_cmdb.`id_area` INNER JOIN marks_laptops_cmdb ON laptops_cmdb.`id_mark` = marks_laptops_cmdb.`id_mark` ORDER BY laptops_cmdb.`id_laptop` ASC'
  
  try {
    const [result] = await pool.query(query)
    res.status(200).json(result);
  } catch(error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addLaptop = async(req, res) => {
  const { area, name, mark, model, st, device } = req.body
  const id_area = await getIdArea(area)
  const id_mark = await getIdMark(mark)

  const query = 'INSERT INTO laptops_cmdb (`id_area`,`name`,`id_mark`,`model`,`st`,`device`) VALUES (?,?,?,?,?,?)'
  
  try {
    await pool.query(query, [id_area, name, id_mark, model, st, device])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateLaptop = async(req, res) => {
  const { id_laptop, area, name, mark, model, st, device } = req.body
  const id_area = await getIdArea(area)
  const id_mark = await getIdMark(mark)

  const query = 'UPDATE laptops_cmdb SET `id_area` = ?, `name` = ?, `id_mark` = ?, `model` = ?, `st` = ?, `device` = ? WHERE `id_laptop` = ?'

  try {
    await pool.query(query, [id_area, name, id_mark, model, st, device, id_laptop])
    res.status(200).send('Information updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying update the information.')
    console.log(error)
  }
}

export const deleteLaptop = async(req, res) => {
  const { id_laptop } = req.body
  const query = 'DELETE FROM laptops_cmdb WHERE id_laptop = ?'

  try {
    await pool.query('DELETE FROM notes_laptops_cmdb WHERE id_laptop = ?', [id_laptop])
    await pool.query(query, [id_laptop])
    res.status(200).send('Information deleted correctly.')
  } catch (error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}

// notes

export const getNotes = async(req, res) => {
  const { id_laptop } = req.query
  const query = 'SELECT * FROM notes_laptops_cmdb WHERE `id_laptop` = ?'
  
  try {
    const [result] = await pool.query(query, [id_laptop])
    res.status(200).json(result)
  } catch(error) {
    res.status(400).send('There was an error to trying obtain the information.')
  }
}

export const addNote = async(req, res) => {
  const { id_laptop, note } = req.body
  const query = 'INSERT INTO notes_laptops_cmdb (`id_laptop`, `note`) VALUES (?,?)'
  
  try {
    await pool.query(query, [id_laptop, note])
    res.status(200).send('Information uploaded correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying upload the information.')
  }
}

export const updateNote = async(req, res) => {
  const { id_note, note } = req.body
  const query = 'UPDATE notes_laptops_cmdb SET  `note` = ? WHERE `id_note` = ?'
  
  try {
    await pool.query(query, [note, id_note])
    res.status(200).send('Information updated correctly.  ')
  } catch(error) {
    res.status(400).send('There was an error to trying update the information.')
  }
}

export const deleteNote = async(req, res) => {
  const { id_note } = req.query
  const query = 'DELETE FROM notes_laptops_cmdb WHERE `id_note` = ?'
  
  try {
    await pool.query(query, [id_note])
    res.status(200).send('Information deleted correctly.')
  } catch(error) {
    res.status(400).send('There was an error to trying delete the information.')
  }
}