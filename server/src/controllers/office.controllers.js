import { pool } from '../db.js'

//// << Licenses

// read
export const getLicenses = async(req, res) => {
  const [result] = await pool.query('SELECT * FROM office_licenses')

  res.json(result)
}

export const getLicense = async({ params }, res) => {
  const { id } = params
  const [result] = await pool.query('SELECT * FROM office_licenses WHERE licensID = ?', id)

  res.json(result)
}

// create
export const addLicense = async({ body }, res) => {
  
  const query = 'INSERT INTO office_licenses (name, email, password, amount) values (?, ?, ?, ?)'
  const values = [ body.name, body.account, body.password, body.amount ]

  try {
    await pool.query(query, values)
    res.status(200).send('The information was uploaded correctly.')
  } catch (error) {
    res.status(400).send('Error uploading information.')
  }
}

// update
export const editLicense = async({ params, body }, res) => {
  const { id } = params
  const query = 'UPDATE office_licenses SET name = ?, email = ?, password = ?, amount = ? WHERE licensID = ?'
  const values = [ body.name, body.account, body.password, body.amount, id ]

  try {
    await pool.query(query, values)
    res.status(200).send('The data was updated successfully.')
  } catch (error) {
    res.status(400).send('Error updating information.')
  }
}

// delete
export const deleteLicense = async({ params }, res) => {
  const { id } = params

  try {
    await pool.query('DELETE from office_licenses WHERE licensID = ?', [id])
    res.status(200).send('Registry deleted successfully.')
  } catch (error) {
    res.status(400).send('Error when trying to delete the registry.')
  }
}

export const updateAmountLicense = async({ params, body }, res) => {
  const { newAmount } = body
  console.log(newAmount)
  const { id } = params
  const query = 'UPDATE office_licenses SET amount_occupied = ? WHERE licensID = ?'
  
  try {
    await pool.query(query, [newAmount, id])
    res.status(200).send('The occupied quantity was updated correctly.')
  } catch (error) {
    res.status(400).send('Error when trying to update the occupied quantities.')
  }
} 

//// License >>

//// <<< Users

// read
export const getUsers = async({ params }, res) => {
  const { idLicense } = params

  const [result] = await pool.query('SELECT * FROM office_users WHERE licensID = ?', [idLicense])

  res.json(result)
}

export const getUsersByName = async({ params }, res) => {
  const { name } = params

  try {
    const [ result ] = await pool.query(`SELECT * FROM office_users WHERE name LIKE '%${ name }%' ORDER BY name ASC`)
    res.json(result)
  } catch (error) {
    res.status(400).send('There was an error searching the database.')
  }
}

// create
export const addUser = async({ body }, res) => {
  const query = 'INSERT INTO office_users (licensID, name, netBIOS, area) values (?,?,?,?)'
  const values = [body.licensID, body.name, body.netBIOS, body.area]
  try {
    await pool.query(query, values)
    res.status(200).send('The user was created correctly.')
  } catch (error) {
    res.status(400).send('Error loading new user.')
  }
}

// update
export const editUser = async({ params, body }, res) => {
  const { id } = params
  const query = 'UPDATE office_users SET name = ?, netBIOS = ?, area = ? WHERE userID = ?'
  const values = [body.name, body.netBIOS, body.area, id]

  try {
    await pool.query(query, values)
    res.status(200).send()
  } catch (error) {
    res.status(400).send()
  }
}

// delete
export const deleteUser = async({ params }, res) => {
  const { id } = params

  try {
    await pool.query('DELETE FROM office_users WHERE userID = ?', [id])
    res.status(200).send('The user was successfully deleted.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the user.')
  }
}

export const deleteUsersByLicense = async({ params }, res) => {
  const { id } = params

  try {
    await pool.query('DELETE FROM office_users WHERE licensID = ?', [id])
    res.status(200).send('The users was successfully deleted.')
  } catch (error) {
    res.status(400).send('There was an error trying to delete the users.')
  }
}

//// Users >>