import * as XLSX from 'xlsx'

export const exportData = (zone, computers, localEmails, customersEmails) => {
  const filename = `${zone}_lista_blanca.xlsx`
  
  const ws_computers = XLSX.utils.json_to_sheet([])
  const ws_localEmails = XLSX.utils.json_to_sheet([])
  const ws_customersEmails = XLSX.utils.json_to_sheet([])
  const wb = XLSX.utils.book_new()

  const rows = 30
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']

  if(computers.length > rows) {
    const data = computers
    for (let i = 1; i <= Math.round(data.length / rows); i++) {
      XLSX.utils.sheet_add_json(ws_computers, data.slice((rows * i - rows), rows * i).map(computer => ({Equipo_NetBIOS: computer.netbios, Equipo_Correo: computer.email})), {origin: `${columns[i * 3 - 3]}1`})
    }
  } else {
    XLSX.utils.sheet_add_json(ws_computers, computers.map(computer => ({Equipo_NetBIOS: computer.netbios, Equipo_Correo: computer.email})))
  }

  if(localEmails.length > rows) {
    const data = localEmails
    for (let i = 1; i <= Math.round(data.length / rows); i++) {
      XLSX.utils.sheet_add_json(ws_localEmails, data.slice((rows * i - rows), rows * i).map(email => ({Correos_Smart_Permitidos: email.email})), {origin: `${columns[i - 1]}1`})
    }
  } else {
    XLSX.utils.sheet_add_json(ws_localEmails, localEmails.map(email => ({Correos_Smart_Permitidos: email.email})))
  }

  if(customersEmails.length > rows) {
    const data = customersEmails
    for (let i = 1; i <= Math.round(data.length / rows); i++) {
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