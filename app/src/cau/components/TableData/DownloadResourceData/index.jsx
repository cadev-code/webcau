import * as XLSX from 'xlsx'
import { Button } from './styled'

export const DownloadResourceData = ({
  resource,
  resourceDataToExport
}) => {

  const exportData = () => {
    const { files, users } = resourceDataToExport
    const resourceData = [[`${resource.resource_name}`], [`Capacidad: ${resource.capacity}GB`], [resource.area]]

    const uploadFiles = [['Archivos por Guardar'], ...files.filter(({type}) => type === 'upload').map(({filename}) => [filename])]
    const receiveFiles = [['Archivos por Recibir'], ...files.filter(({type}) => type === 'receive').map(({filename}) => [filename])]
    
    const wsFiles = XLSX.utils.aoa_to_sheet(resourceData)
    wsFiles["!merges"] = [
      { s: { c: 0, r: 0 }, e: { c: 1, r: 0 } },
      { s: { c: 0, r: 1 }, e: { c: 1, r: 1 } },
      { s: { c: 0, r: 2 }, e: { c: 1, r: 2 } },
    ]
    XLSX.utils.sheet_add_aoa(wsFiles, uploadFiles, { origin: "A5" })
    XLSX.utils.sheet_add_aoa(wsFiles, receiveFiles, { origin: "B5" })
    
    const usersData = users.map(({name, user, permissions}) => ({ Nombre: name, Usuario: user, Permisos: permissions }))
    
    const wsUsers = XLSX.utils.aoa_to_sheet(resourceData)
    wsUsers["!merges"] = [
      { s: { c: 0, r: 0 }, e: { c: 2, r: 0 } },
      { s: { c: 0, r: 1 }, e: { c: 2, r: 1 } },
      { s: { c: 0, r: 2 }, e: { c: 2, r: 2 } },
    ]
    XLSX.utils.sheet_add_json(wsUsers, usersData, { origin: "A5" })

    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, wsFiles, 'Archivos')
    XLSX.utils.book_append_sheet(wb, wsUsers, 'Usuarios Asignados')

    XLSX.writeFile(wb, 'prueba.xlsx')
  }

  return (
    <Button
      onClick={exportData}
    >
      Descargar Información
    </Button>
  )
}
