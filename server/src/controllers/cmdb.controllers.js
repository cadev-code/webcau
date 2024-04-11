import { pool } from '../db.js'

// get data
export const getAllData = async(req, res) => {
  const [result] = await pool.query('SELECT * FROM cmdb')
  res.json(result)
}

// add data
export const addData = async({ body }, res) => {
  const query = 'INSERT INTO cmdb (idMapa, netBIOS, IP, mac, ext, hash, nodo, licSiph, vlan, staff, area, kc_monitor, kc_cpu) values (?,?,?,?,?,?,?,?,?,?,?,?,?)'
  const values = [body.idMapa, body.netBIOS, body.IP, body.mac, body.ext, body.hash, body.nodo, body.licSiph, body.vlan, body.staff, body.area, body.kc_monitor, body.kc_cpu]

  try {
    const [addResult] = await pool.query(query, values)
    const [getResult] = await pool.query('SELECT * FROM cmdb WHERE id = ?', [addResult.insertId])
    res.status(200).json(getResult)
  } catch (error) {
    res.status(400).send('Error when trying to add data.')
  }
}

// update data
export const updateData = async({ body }, res) => {
  const query = 'UPDATE cmdb SET idMapa = ?, netBIOS = ?, IP = ?, mac = ?, ext = ?, hash = ?, nodo = ?, licSiph = ?, vlan = ?, staff = ?, area = ?, kc_monitor = ?, kc_cpu = ? WHERE id = ?'
  const values = [body.idMapa, body.netBIOS, body.IP, body.mac, body.ext, body.hash, body.nodo, body.licSiph, body.vlan, body.staff, body.area, body.kc_monitor, body.kc_cpu, body.id]

  try {
    await pool.query(query, values)
    const [result] = await pool.query('SELECT * FROM cmdb WHERE id = ?', [body.id])
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error updating the data.')
  }
}

// delete data
export const deleteData = async({ params }, res) => {
  const { id } = params
  
  try {
    await pool.query('DELETE FROM cmdb WHERE id = ?', [id])
    res.status(200).send('The data was successfully deleted.')
  } catch (error) {
    res.status(400).send('Error when trying to delete data.')
  }
}

// get data by general filter
export const getDataGeneralFilter = async({ params }, res) => {
  const { search } = params

  const [result] = await pool.query(`SELECT * FROM cmdb WHERE CONCAT(idMapa, netBIOS, IP, mac, ext, hash, nodo, licSiph, vlan, staff, area, kc_monitor, kc_cpu) LIKE '%${ search }%'`)
  res.json(result)
}

// get data with specific filter
export const getDataSpecificFilter = async({ query }, res) => {
  const filters = []
  for(const filter in query) {
    filter === 'kc' 
      ? filters.push(`(kc_monitor LIKE '%${ query[filter] }%' OR kc_cpu LIKE '%${ query[filter] }%')`)
      : filters.push(`${filter} LIKE '%${ query[filter] }%'`)
  }
  const [result] = await pool.query(`SELECT * FROM cmdb WHERE ${filters.join(' AND ')}`)
  res.json(result)
}