import { useEffect, useRef, useState } from 'react'
import { AddInputForm, ListButton, ListContainer, ListFooter, ListItems, ListMain, ListTitle } from './styled'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { addZone } from '../../../api/cmdbWhitelists'
import { listNameFormState } from '../helpers/listNameFormState'

export const ListMenu = ({ 
  userIsAdmin,
  zonesIsLoading,
  zonesData = [], 
  refreshData, 
  zoneSelected, 
  setZoneSelected,
  activeForm,
  setActiveForm
}) => {
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

  const inputRef = useRef(null)

  const { 
    showForm,
    setShowForm,
    inputValue,
    invalidInput,
    setInvalidInput,
    inputOnChange,
    closeForm
  } = listNameFormState(setActiveForm)

  const openForm = () => {
    setActiveForm(true)
    setShowForm(true)
  }

  useEffect(() => {
    showForm &&
      inputRef.current.focus()
  }, [showForm])

  const formSubmit = async() => {
    if(inputValue.length === 0) {
      setInvalidInput(true)
      inputRef.current.focus()
      return
    }
    
    try {
      const { data } = await addZone({zone: inputValue})
      await refreshData('add', data)
      setListSortOrder('default')
      closeForm()
    } catch (error) {
      console.log('error adding zone')
    }
  }

  return (
    <ListContainer>
      <ListMain
        userIsAdmin={userIsAdmin}
        isFormVisible={showForm}
      >
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
        <ListItems isFormVisible={showForm}>
          <ul>
            {
              listData.map(({ id_zone, zone }) => (
                <li key={ id_zone }>
                  <ListButton
                    isSelected={id_zone === zoneSelected.id_zone}
                    onClick={() => setZoneSelected({id_zone, zone})}
                    disabled={activeForm}
                  >
                    { zone }
                  </ListButton>
                </li>
              ))
            }
          </ul>
        </ListItems>
      </ListMain>
      {
        userIsAdmin &&
          <ListFooter isFormVisible={showForm}>
            {
              showForm
                ? <AddInputForm invalidInput={invalidInput}>
                    <input 
                      ref={inputRef}
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
                    onClick={openForm}
                    disabled={activeForm}
                  >
                    Agregar Lista
                  </button>
            }
          </ListFooter>
      }
    </ListContainer>
  )
}
