  import { pool } from '../db.js'

// areas emails

export const addArea = async({ body }, res) => {
  
  const { text } = body
  const query = 'INSERT INTO areas_emails_base (`area`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }

}

export const getAreas = async(req, res) => {
  const query = 'SELECT * FROM areas_emails_base ORDER BY `area` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateArea = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE areas_emails_base SET `area` = ? WHERE id_area = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteArea = async(req, res) => {

  const { id_area } = req.query
  const query = 'DELETE FROM areas_emails_base WHERE id_area = ?'
  
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
  const query = 'INSERT INTO sites_emails_base (`site`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }

}

export const getSites = async(req, res) => {
  const query = 'SELECT * FROM sites_emails_base ORDER BY `site` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateSite = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE sites_emails_base SET `site` = ? WHERE id_site = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteSite = async(req, res) => {

  const { id_site } = req.query
  const query = 'DELETE FROM sites_emails_base WHERE id_site = ?'
  
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
  const query = 'INSERT INTO lists_emails_base (`list`) VALUES (?)'

  try {
    await pool.query(query, [text])
    res.status(200).send('Information uploaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }

}

export const getLists = async(req, res) => {

  const { site } = req.query
  const query = 'SELECT * FROM lists_emails_base ORDER BY `list` ASC'

  try {
    const [result] = await pool.query(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }

}

export const updateList = async({ body }, res) => {
  
  const { id, text } = body
  const query = 'UPDATE lists_emails_base SET `list` = ? WHERE id_list = ?'

  try {
    await pool.query(query, [text, id])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }

}

export const deleteList = async(req, res) => {

  const { id_list } = req.query
  const query = 'DELETE FROM lists_emails_base WHERE id_list = ?'
  
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
  const [result] = await pool.query('SELECT `id_area` FROM areas_emails_base WHERE `area` = ?', [area])
  return result[0].id_area
}

const getIdSite = async(site) => {
  const [result] = await pool.query('SELECT `id_site` FROM sites_emails_base WHERE `site` = ?', [site])
  return result[0].id_site
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
    site,
    note
  } = body
  const id_area = await getIdArea(area)
  const id_site = await getIdSite(site)
  const query = 'INSERT INTO registers_emails_base (`name`, `email`, `password`,`position`, `creation_date`, `status`, `note`, `id_area`, `id_site`) VALUES (?,?,?,?,?,?,?,?,?)'
  
  try {
     await pool.query(query, [name, email, password, position, creation_date, status, note, id_area, id_site])
     res.status(200).send('Information added correctly.')
   } catch (error) {
     res.status(400).send('There was an error trying to add the information.')
   }
}

export const getRegisters = async(req, res) => {
  const query = `
    SELECT
      registers_emails_base.id_register,
      registers_emails_base.name,
      registers_emails_base.email,
      registers_emails_base.password,
      registers_emails_base.position,
      registers_emails_base.creation_date,
      registers_emails_base.status,
      registers_emails_base.note,
      areas_emails_base.area,
      sites_emails_base.site,
      GROUP_CONCAT(DISTINCT lists_emails_base.list ORDER BY lists_emails_base.list SEPARATOR ',') AS lists,
      inactivity_dates_emails_base.discharge_date
    FROM registers_emails_base
    INNER JOIN areas_emails_base
      ON areas_emails_base.id_area = registers_emails_base.id_area
    INNER JOIN sites_emails_base
      ON sites_emails_base.id_site = registers_emails_base.id_site
    LEFT JOIN inactivity_dates_emails_base
      ON registers_emails_base.id_register = inactivity_dates_emails_base.id_register
    LEFT JOIN registers_lists_emails_base
      ON registers_emails_base.id_register = registers_lists_emails_base.id_register
    LEFT JOIN lists_emails_base
      ON registers_lists_emails_base.id_list = lists_emails_base.id_list
    GROUP BY 
      registers_emails_base.id_register,
      registers_emails_base.name,
      registers_emails_base.email,
      registers_emails_base.password,
      registers_emails_base.position,
      registers_emails_base.creation_date,
      registers_emails_base.status,
      areas_emails_base.area,
      sites_emails_base.site,
      inactivity_dates_emails_base.discharge_date
    ORDER BY registers_emails_base.name ASC
  `

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
    site,
    note,
    discharge_date
  } = body

  const id_area = await getIdArea(area)
  const id_site = await getIdSite(site)

  const query = 'UPDATE registers_emails_base SET `name` = ?, `email` = ?, `password` = ?, `position` = ?, `creation_date` = ?, `status` = ?, `note` = ?, `id_area` = ?, `id_site` = ?  WHERE id_register = ?'

  try {
    await pool.query(query, [name, email, password, position, creation_date, status, note, id_area, id_site, id_register])
    
    await pool.query('DELETE FROM inactivity_dates_emails_base WHERE id_register = ?', [id_register])

    if(status === "Baja") {
      await pool.query('INSERT INTO inactivity_dates_emails_base (`id_register`,`discharge_date`) VALUES (?,?)', [id_register, discharge_date])
    }

    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    console.log(error)
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const deleteRegisterByArea = async({body}, res) => {

  const { id_register } = body
  const query = 'DELETE FROM registers_emails_base WHERE id_register = ?'
  
  try {
    await pool.query(query, [id_register])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }

}

// registers lists

export const getRegisterLists = async(req, res) => {
  const { id_register } = req.query
  const query = `
    SELECT 
      registers_lists_emails_base.id,
      registers_lists_emails_base.id_register,
      registers_lists_emails_base.id_list,
      lists_emails_base.list
    FROM 
      registers_lists_emails_base
    INNER JOIN
      lists_emails_base
    ON
      registers_lists_emails_base.id_list = lists_emails_base.id_list
    WHERE
      registers_lists_emails_base.id_register = ?
    ORDER BY lists_emails_base.list ASC
  `

  try {
    const [result] = await pool.query(query, [id_register])
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('Error when trying to obtain the information.')
  }
}

export const addEmailToList = async(req, res) => {
  const { id_register, id_list } = req.body
  const query = 'INSERT INTO registers_lists_emails_base (`id_register`, `id_list`) VALUES (?,?)'

  try {
    await pool.query(query, [id_register, id_list])
    res.status(200).send('Information added correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to add the information.')
  }
}

export const removeMailFromList = async(req, res) => {
  const { id } = req.query
  const query = 'DELETE FROM registers_lists_emails_base WHERE id = ?'

  try {
    await pool.query(query, [id])
    res.status(200).send('Information successfully deleted.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the information.')
  }
}