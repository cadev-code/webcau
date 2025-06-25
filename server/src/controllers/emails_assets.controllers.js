  import { pool } from '../db.js'

// areas emails

export const addArea = async({ body }, res) => {
  
  const { text } = body
  const query = 'INSERT INTO areas_emails_assets (`area`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }

}

export const getAreas = async(req, res) => {
  const query = 'SELECT * FROM areas_emails_assets ORDER BY `area` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateArea = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE areas_emails_assets SET `area` = ? WHERE id_area = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteArea = async(req, res) => {

  const { id_area } = req.query
  const query = 'DELETE FROM areas_emails_assets WHERE id_area = ?'
  
  try {
    await pool.query(query, [id_area])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}

// sites emails

export const addSite = async({ body }, res) => {
  
  const { text } = body
  const query = 'INSERT INTO sites_emails_assets (`site`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }

}

export const getSites = async(req, res) => {
  const query = 'SELECT * FROM sites_emails_assets ORDER BY `site` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateSite = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE sites_emails_assets SET `site` = ? WHERE id_site = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteSite = async(req, res) => {

  const { id_site } = req.query
  const query = 'DELETE FROM sites_emails_assets WHERE id_site = ?'
  
  try {
    await pool.query(query, [id_site])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}

// lists emails

export const addList = async({ body }, res) => {
  
  const { text, site } = body
  const query = 'INSERT INTO lists_emails_assets (`list`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }

}

export const getLists = async(req, res) => {

  const { site } = req.query
  const query = 'SELECT * FROM lists_emails_assets ORDER BY `list` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateList = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE lists_emails_assets SET `list` = ? WHERE id_list = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteList = async(req, res) => {

  const { id_list } = req.query
  const query = 'DELETE FROM lists_emails_assets WHERE id_list = ?'
  
  try {
    await pool.query(query, [id_list])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}

// registers emails

// get id_area for add or update register
const getIdArea = async(area) => {
  const [result] = await pool.query('SELECT `id_area` FROM areas_emails_assets WHERE `area` = ?', [area])
  return result[0].id_area
}

const getIdSite = async(site) => {
  const [result] = await pool.query('SELECT `id_site` FROM sites_emails_assets WHERE `site` = ?', [site])
  return result[0].id_site
}

const getIdList = async(list) => {
  const [result] = await pool.query('SELECT `id_list` FROM lists_emails_assets WHERE `list` = ?', [list])
  return result[0].id_list
}

export const addRegister = async({ body }, res) => {
  const { 
    name, 
    email, 
    password, 
    position,
    creation_date,
    area, 
    status, 
    list, 
    site 
  } = body
  const id_area = await getIdArea(area)
  const id_site = await getIdSite(site)
  const id_list = await getIdList(list)
  const query = 'INSERT INTO registers_emails_assets (`name`, `email`, `password`,`position`, `creation_date`, `status`, `id_area`, `id_list`, `id_site`) VALUES (?,?,?,?,?,?,?,?,?)'
  
  try {
     await pool.query(query, [name, email, password, position, creation_date, status, id_area, id_list, id_site])
     res.status(200).send('Information added correctly.')
   } catch (error) {
     res.status(400).send('There was an error trying to add the information.')
   }
}

export const getRegisters = async(req, res) => {
  const query = `
    SELECT 
      registers_emails_assets.id_register, 
      registers_emails_assets.name, 
      registers_emails_assets.email, 
      registers_emails_assets.password, 
      registers_emails_assets.position, 
      registers_emails_assets.creation_date, 
      registers_emails_assets.status, 
      areas_emails_assets.area, 
      lists_emails_assets.list,
      sites_emails_assets.site
    FROM 
      registers_emails_assets 
    INNER JOIN 
      areas_emails_assets ON registers_emails_assets.id_area = areas_emails_assets.id_area 
    INNER JOIN 
      lists_emails_assets ON registers_emails_assets.id_list = lists_emails_assets.id_list
    INNER JOIN 
      sites_emails_assets ON registers_emails_assets.id_site = sites_emails_assets.id_site
    ORDER BY 
      registers_emails_assets.name ASC`

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateRegisterByArea = async({ body }, res) => {
  
  const { 
    id_register, 
    name, 
    email, 
    password, 
    position,
    creation_date,
    area, 
    status, 
    list, 
    site
  } = body
  const id_area = await getIdArea(area)
  const id_site = await getIdSite(site)
  const id_list = await getIdList(list)
  const query = 'UPDATE registers_emails_assets SET `name` = ?, `email` = ?, `password` = ?, `position` = ?, `creation_date` = ?, `status` = ?, `id_area` = ?, `id_list` = ?, `id_site` = ?  WHERE id_register = ?'

  try {
    await pool.query(query, [name, email, password, position, creation_date, status, id_area, id_list, id_site, id_register])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    console.log(error)
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteRegisterByArea = async({body}, res) => {

  const { id_register } = body
  const query = 'DELETE FROM registers_emails_assets WHERE id_register = ?'
  
  try {
    await pool.query(query, [id_register])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(200).send('There was an error trying to delete the information.')
  }

}