import XLSX from 'xlsx'
import fs from 'fs'
import { pool } from '../db.js';

export const loadDataFromWorkbook = async(req, res) => {
  const { path } = req.file;
  const fileBuffer = fs.readFileSync(path)
  const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

  for(const sheet of workbook.SheetNames) {
    const worksheet = workbook.Sheets[sheet];
    const raw_data = XLSX.utils.sheet_to_json(worksheet, {header: 1});
    
    const dataQueries = await raw_data.slice(1).map(data => {
      console.log(data);
      pool.query('INSERT INTO hardening (policy_description, checked, gpo) VALUES (?,?,?)', data);
    });

    await Promise.all(dataQueries);
  }

  try {
    await Promise.all(dataQueries);
    res.status(200).send('Information was loaded correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to load the information.')
  }
}

export const getGPOs = async(req, res) => {
  try {
    const [result] = await pool.query('SELECT DISTINCT gpo FROM hardening')
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const getPolicies = async(req, res) => {
  const { gpo } = req.query

  try {
    const [result] = await pool.query('SELECT * FROM hardening WHERE gpo = ?', [gpo.slice(1,gpo.length - 1)])
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}

export const updatePolicyCheck = async (req, res) => {
  const { id, checked } = req.body

  try {
    await pool.query('UPDATE hardening SET checked = ? WHERE id = ?', [Number(checked), Number(id)])
    res.status(200).send('Information was updated correctly.')
  } catch (error) {
    res.status(400).send('There was an error trying to update the information.')
  }
}