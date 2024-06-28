import { useEffect, useRef } from 'react'
import { Container, EditInputForm } from './styled'
import { Download, Edit } from '@mui/icons-material'
import { listNameFormState } from '../helpers/listNameFormState'
import { updateZone } from '../../../api/cmdbWhitelists'

export const ListName = ({ 
  userIsAdmin,
  zoneSelected, 
  refreshData,
  activeForm,
  setActiveForm,
  setExportingData
}) => {

  const inputRef = useRef(null)

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
              <div className="title">
                <p>{ zoneSelected?.zone }</p>
                {
                  userIsAdmin &&
                    <button className="edit-icon"
                      onClick={openForm}
                      disabled={activeForm}
                    >
                      <Edit />
                    </button>
                }
              </div>
              <button className="download-btn"
                onClick={() => setExportingData(true)}
                disabled={activeForm}
              >
                <Download />
              </button>
            </>
          : <EditInputForm invalidInput={invalidInput}>
              <input 
                ref={inputRef}
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
