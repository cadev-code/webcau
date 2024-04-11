import * as XLSX from 'xlsx'

export const dataToExcel = (data) => {

  const exportToExcel = () => {
    const date = new Date()
    const filename = `informe-${ date.getDate() }_${ date.getMonth() + 1 }_${ date.getFullYear() }-${ date.getHours() }_${ date.getMinutes() }_${ date.getSeconds() }.xlsx` 
    const ws = XLSX.utils.json_to_sheet(data.map(reg => {
      const { id, ...newObj } = reg
      return newObj
    }))
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja 1')
    XLSX.writeFile(wb, filename)
  }

  return {
    exportToExcel
  }
}