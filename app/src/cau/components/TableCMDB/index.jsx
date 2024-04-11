// react imports
import { useEffect, useState } from 'react'

// components imports
import { 
  BodyTable, 
  ColumnTitle, 
  Container, 
  Data, 
  HeaderTable, 
  Register, 
  SearchMessage, 
  Table 
} from './styled'
import { 
  Call,
  DesktopWindowsOutlined,
  KeyboardDoubleArrowDown, 
  KeyboardDoubleArrowUp, 
  LanOutlined, 
  Place, 
  ScreenSearchDesktopOutlined, 
  SearchOffOutlined, 
  TravelExplore 
} from '@mui/icons-material'
import { SpinLoader } from '../../../components'

export const TableCMDB = ({ 
  setShowWindow,
  data,
  isLoading,
  isSearched,
  setDataToShow,
  sortData
}) => {

  const columns = {
    idMapa: { title: 'ID Mapa', icon: <Place className="icon" />, width: '14%', id: 'idMapa' },
    netBIOS: { title: 'NetBIOS', icon: <TravelExplore className="icon" />, width: '22.5%', id: 'netBIOS' },
    IP: { title: 'IP', icon: <LanOutlined className="icon" />, width: '22.5%', id: 'IP' },
    mac: { title: 'MAC', icon: <DesktopWindowsOutlined className="icon" />, width: '25%', id: 'mac' },
    ext: { title: 'Extensión', icon: <Call className="icon" />, width: '16%', id: 'ext' }
  }

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(data.map(({ id, idMapa, netBIOS, IP, mac, ext }) => ({ id, idMapa, netBIOS, IP, mac, ext })))
  }, [data])

  useEffect(() => {
    console.log(tableData)
  }, [tableData])

  const openData = (id) => {
    setShowWindow('data')
    setDataToShow(data.filter(register => register.id === id))
  }

  return (
    <Container>
      <Table>
        <HeaderTable>
          {
            Object.keys(columns).map(prop => (
              <ColumnTitle 
                key={ columns[prop].title } 
                width={ columns[prop].width }
                // onClick={ () => sortTable(columns[prop].id) }
              >
                <p>{ columns[prop].title }</p>
                { columns[prop].icon }
              </ColumnTitle>
            ))
          }
        </HeaderTable>
        <BodyTable>
          {            
            isLoading &&
            <SpinLoader />
          }
          {
            tableData.map((register) => (
              <Register 
                key={ register.id }
                onClick={ () => openData(register.id) }
              >
                {
                  Object.keys(register).map((prop, i) => (prop !== 'id') && (
                    <Data
                      key={ i } 
                      width={ columns[prop].width }
                    >
                      { register[prop] }
                    </Data>
                  ))
                }
              </Register>
            ))
          }
          {
            (data.length === 0 && !isLoading) &&
            <SearchMessage>
              { 
                isSearched 
                  ? <SearchOffOutlined className="icon" /> 
                  : <ScreenSearchDesktopOutlined className="icon" /> 
              }
              <h3>{isSearched ? 'No se encontraron resultados...' : 'Realiza una búsqueda...'}</h3>
            </SearchMessage>
          }
        </BodyTable>
      </Table>
    </Container>
  )
}