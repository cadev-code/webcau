import * as XLSX from 'xlsx'

export const exportData = (zone, computers, localEmails, customersEmails) => {
  const filename = `${zone}_lista_blanca.xlsx`
  
  const ws_computers = XLSX.utils.json_to_sheet([]) // hoja nueva
  const ws_localEmails = XLSX.utils.json_to_sheet([]) // hoja nueva
  const ws_customersEmails = XLSX.utils.json_to_sheet([]) // hoja nueva
  const wb = XLSX.utils.book_new() // libro nuevo

  const rows = 30 // cantidad de celdas por columna
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'] // columnas

  if(computers.length > rows) {
    const data = computers
    const columnsAmount = ((data.length / rows)*10)%10 === 0 ? (data.length / rows) : (Math.trunc(data.length / rows) + 1)
    for (let i = 1; i <= columnsAmount; i++) {
      XLSX.utils.sheet_add_json(ws_computers, data.slice((rows * i - rows), rows * i).map(computer => ({Equipo_NetBIOS: computer.netbios, Equipo_Correo: computer.email})), {origin: `${columns[i * 3 - 3]}1`})
    }
  } else {
    XLSX.utils.sheet_add_json(ws_computers, computers.map(computer => ({Equipo_NetBIOS: computer.netbios, Equipo_Correo: computer.email})))
  }

  if(localEmails.length > rows) {
    const data = localEmails
    const columnsAmount = ((data.length / rows)*10)%10 === 0 ? (data.length / rows) : (Math.trunc(data.length / rows) + 1)
    for (let i = 1; i <= columnsAmount; i++) {
      XLSX.utils.sheet_add_json(ws_localEmails, data.slice((rows * i - rows), rows * i).map(email => ({Correos_Smart_Permitidos: email.email})), {origin: `${columns[i - 1]}1`})
    }
  } else {
    XLSX.utils.sheet_add_json(ws_localEmails, localEmails.map(email => ({Correos_Smart_Permitidos: email.email})))
  }

  if(customersEmails.length > rows) {
    const data = customersEmails
    const columnsAmount = ((data.length / rows)*10)%10 === 0 ? (data.length / rows) : (Math.trunc(data.length / rows) + 1)
    for (let i = 1; i <= columnsAmount; i++) {
      XLSX.utils.sheet_add_json(ws_customersEmails, data.slice((rows * i - rows), rows * i).map(email => ({Correos_Clientes_Permitidos: email.email})), {origin: `${columns[i - 1]}1`})
    }
  } else {
    XLSX.utils.sheet_add_json(ws_customersEmails, customersEmails.map(email => ({Correos_Clientes_Permitidos: email.email})))
  }

  XLSX.utils.book_append_sheet(wb, ws_computers, 'Equipos')
  XLSX.utils.book_append_sheet(wb, ws_localEmails, 'Correos Smart Permitidos')
  XLSX.utils.book_append_sheet(wb, ws_customersEmails, 'Correos Clientes Permitidos')

  XLSX.writeFile(wb, filename)
}