import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'webcau'
})