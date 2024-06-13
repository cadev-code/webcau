import { useEffect, useState } from 'react'
import { Container, EditInputForm } from './styled'
import { ConnectingAirportsOutlined, Edit } from '@mui/icons-material'
import { listNameFormState } from '../helpers/listNameFormState'
import { updateZone } from '../../../api/cmdbWhitelists'

export const ListName = ({ 
  zoneSelected, 
  refreshData,
  activeForm,
  setActiveForm
}) => {

  const {
    showForm,
    setShowForm,
    inputValue,
    setInputValue,
    invalidInput,
    setInvalidInput,
    inputOnChange,
    closeForm
  } = listNameFormState(setActiveForm)

  const openForm = () => {
    setActiveForm(true)
    setInputValue(zoneSelected?.zone)
    setShowForm(true)
  }

  const formSubmit = async() => {
    if(inputValue.length === 0) {
      setInvalidInput(true)
      return
    }

    try {
      await updateZone({id_zone: zoneSelected.id_zone, zone: inputValue})
      await refreshData('update')
      closeForm()
    } catch (error) {
      console.log('error updating zone')
    }
  }

  return (
    <Container activeForm={activeForm}>
      {
        !showForm
          ? <>
              <p>{ zoneSelected?.zone }</p>
              <button className="edit-icon"
                onClick={openForm}
                disabled={activeForm}
              >
                <Edit />
              </button>
            </>
          : <EditInputForm invalidInput={invalidInput}>
              <input 
                type="text"
                value={inputValue}
                onChange={inputOnChange}
              />
              <div>
                <button
                  onClick={formSubmit}
                  disabled={invalidInput}
                >
                  Guardar
                </button>
                <button
                  onClick={closeForm}
                >
                  Cancelar
                </button>
              </div>
            </EditInputForm>
      }
    </Container>
  )
}
