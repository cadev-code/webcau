import { useEffect, useState } from 'react'
import { AddInputForm, ListContainer, ListFooter, ListItems, ListMain, ListTitle } from './styled'

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { addZone } from '../../../api/cmdbWhitelists'

export const ListMenu = ({ zonesData = [], refreshData, zoneSelected, setZoneSelected }) => {
  const [listData, setListData] = useState([])
  const [listSortOrder, setListSortOrder] = useState('default')

  useEffect(() => {
    setListData(zonesData)
  }, [zonesData])

  const handleSort = () => {
    switch(listSortOrder) {
      case 'default':
        setListSortOrder('asc')
        listData.sort((a, b) => a.zone.localeCompare(b.zone))
        break
      case 'asc':
        setListSortOrder('desc')
        listData.sort((a, b) => b.zone.localeCompare(a.zone))
        break
      case 'desc':
        setListSortOrder('default')
        listData.sort((a, b) => a.id_zone - b.id_zone)
        break
      default:
        throw new Error('Invalid sort order')
    }
  }

  const [showAddListForm, setShowAddListForm] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)

  const inputOnChange = ({target}) => {
    setInputValue(target.value)
    target.value === '' ? setInvalidInput(true) :  setInvalidInput(false)
  }

  const formSubmit = async() => {
    if(inputValue.length === 0) {
      setInvalidInput(true)
      return
    }
    
    try {
      await addZone({zone: inputValue})
      await refreshData()
      setListSortOrder('default')
      closeForm()
    } catch (error) {
      console.log('error adding zone')
    }
  }

  const closeForm = () => {
    setShowAddListForm(false)
    setInputValue('')
    setInvalidInput(false)
  }

  return (
    <ListContainer>
      <ListMain isFormVisible={showAddListForm}>
        <ListTitle
          onClick={handleSort}
        >
          <p>Listas Blancas</p>
          <div>
            {
              listSortOrder !== 'default' &&
                (listSortOrder === 'asc'
                 ? <ArrowDropUp />
                 : <ArrowDropDown />)
            }
          </div>
        </ListTitle>
        <ListItems isFormVisible={showAddListForm}>
          <ul>
            {
              listData.map(({ id_zone, zone }) => (
                <li key={ id_zone }>
                  <button
                    onClick={() => setZoneSelected({id_zone, zone})}
                  >
                    { zone }
                  </button>
                </li>
              ))
            }
          </ul>
        </ListItems>
      </ListMain>
      <ListFooter isFormVisible={showAddListForm}>
        {
          showAddListForm
            ? <AddInputForm invalidInput={invalidInput}>
                <input 
                  type="text"
                  placeholder="Nombre de lista nueva..."
                  value={inputValue}
                  onChange={inputOnChange}
                  required
                />
                <div>
                  <button
                    onClick={closeForm}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={formSubmit}
                    disabled={invalidInput}
                  >
                    Guardar Lista
                  </button>
                </div>
              </AddInputForm>
            : <button
                onClick={() => setShowAddListForm(true)}
              >
                Agregar Lista
              </button>
        }
      </ListFooter>
    </ListContainer>
  )
}
