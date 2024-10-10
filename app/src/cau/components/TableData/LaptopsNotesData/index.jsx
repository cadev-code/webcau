import React, { useEffect, useState } from 'react'
import { TextBox } from '../ModalData/styled'
import { Close } from '@mui/icons-material'
import { addNote, deleteNote, getNotes } from '../../../api/cmdbLaptops.api'

export const LaptopsNotesData = ({ id_laptop }) => {

  const [notesData, setNotesData] = useState([])

  const getNotesData = async() => {
    const { data } = await getNotes(id_laptop)
    setNotesData(data)
  }

  useEffect(() => {
    getNotesData()
  }, [])

  const [showForm, setShowForm] = useState({show: false, mode: ''})
  const [formValues, setFormValues] = useState({note: '', id_laptop})

  const onChangeInput = ({target}) => 
    setFormValues({...formValues, note: target.value})

  const closeForm = () => {
    setShowForm({show: false, mode: ''})
    setFormValues({note: '', id_laptop})
  }

  const openForm = (mode, data) => {
    if(mode === 'add') {
      setShowForm({show: true, mode: 'add'})
    } else if('delete') {
      setShowForm({show: true, mode: 'delete'})
      setFormValues(data)
    }
  }

  const onSubmitForm = async(mode) => {
    if(mode === 'add') {
      await addNote(formValues)
    } else if(mode === 'delete') {
      await deleteNote(formValues.id_note)
    }
    await getNotesData()
    closeForm()
  }

  return (
    <TextBox className="notes">
      <span>Notas</span>
      {!showForm.show && (
        <div className="notes-container">
          {notesData.map((data) => (
            <div key={data.id_note} className="note">
              <p>{data.note}</p>
              <button onClick={() => openForm('delete', data)}>
                <Close />
              </button>
            </div>
          ))}
        </div>
      )}
      {showForm.show && (
        <div className="form">
          <input 
            type="text" 
            placeholder="Escribe tu nota..."
            value={formValues.note}
            onChange={onChangeInput}
            disabled={showForm.mode === 'delete'}
          />
          <div className="buttons">
            <button
              onClick={closeForm}
            >
                Cancelar
              </button>
            <button 
              className={showForm.mode === 'delete' ? 'delete' : ''}
              onClick={() => onSubmitForm(showForm.mode)}
            >
              {showForm.mode === 'add' ? 'Guardar' : 'Eliminar'}
            </button>
          </div>
        </div>
      )}
      {!showForm.show && (
        <button onClick={() => openForm('add')}>
          Agregar Nota
        </button>
      )}
    </TextBox>
  )
}
