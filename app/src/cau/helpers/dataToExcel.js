import * as XLSX from 'xlsx'

export const dataToExcel = (dataIdentifier, data) => {

  const exportToExcel = () => {
    const date = new Date()
    const filename = `${dataIdentifier}-${ date.getDate() }_${ date.getMonth() + 1 }_${ date.getFullYear() }-${ date.getHours() }_${ date.getMinutes() }_${ date.getSeconds() }.xlsx` 
    const ws = XLSX.utils.json_to_sheet(data.map(reg => reg))
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, dataIdentifier)
    XLSX.writeFile(wb, filename)
  }

  return {
    exportToExcel
  }
}