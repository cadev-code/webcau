import { pool } from '../db.js'

export const getPrinters = async(req, res) => {
  const [result] = await pool.query('SELECT * FROM printers ORDER BY `status` ASC')

  res.json(result)
}

export const getYears = async(req, res) => {
  const [result] = await pool.query('SELECT year_s FROM years_printers')

  res.json(result)
}

export const getDates = async(req, res) => {
  const { year, month } = req.query

  const [result] = await pool.query
  (
    'SELECT date_ FROM dates_printers WHERE year_ = ? AND month_ = ? ORDER BY date_ ASC',
    [ Number(year), month ]
  )

  res.json(result)
}

export const getToners = async(req, res) => {
  const { noserie } = req.query

  const [result] = await pool.query('SELECT * FROM toners_printers WHERE noSeriePrint_t = ?', noserie)

  res.json(result)
}

export const updateToners = async(req, res) => {
  // obtener actualizaciones con el cuerpo de petición
  const updates = req.body
  const query = 'UPDATE toners_printers SET amount = ? WHERE noSeriePrint_t = ? AND color_key = ?'

  try {
    // crea un arreglo de consultas por x cantidad de cambios
    const queriesUpdate = await updates.map(update => {
      const values = [ update.amount, update.noSerie, update.color_key ]
      pool.query(query, values)
    })

    // ejecuta todas las queries requeridas a la vez
    await Promise.all(queriesUpdate)

    res.status(200).send('The information was updated correctly')
  } catch (error) {
    res.status(400).send('Error to update information')
  }
}

export const getRegisters = async(req, res) => {
  const { year, month, noserie } = req.query

  const [result] = await pool.query
  (
    'SELECT * FROM registers_printers WHERE year_r = ? AND month_r = ? AND noSeriePrint_r = ? ORDER BY date_r ASC',
    [ Number(year), month, noserie ]
  )

  res.json(result)
}

export const updateRegisters = async(req, res) => {
  const updates = req.body

  const query = 'UPDATE registers_printers SET percent = ?, agent = ? WHERE id = ?'

  try {
    // crea un arreglo de consultas por x cantidad de cambios
    const queriesUpdate = await updates.map(update => {
      const values = [ update.percent, update.agent, update.id ]
      pool.query(query, values)
    })

    // ejecuta todas las queries requeridas a la vez
    await Promise.all(queriesUpdate)

    res.status(200).send('The information was updated correctly')
  } catch (error) {
    res.status(400).send('Error to update information')
  }
}

export const updateDatesReport = async(req, res) => {
  const updates = req.body
  const query = 'UPDATE printers SET dateReport = ? WHERE noSerie = ?'

  try {
    // crea un arreglo de consultas por x cantidad de cambios
    const queriesUpdate = await updates.map(update => {
      const values = [ update.newDate, update.noSerie ]
      pool.query(query, values)
    })

    // ejecuta todas las queries requeridas a la vez
    await Promise.all(queriesUpdate)

    res.status(200).send('The information was updated correctly')
  } catch (error) {
    res.status(400).send('Error to update information')
  }
}