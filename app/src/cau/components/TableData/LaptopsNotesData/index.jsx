import React, { useEffect, useState } from 'react'
import { TextBox } from '../ModalData/styled'
import { Close } from '@mui/icons-material'
import { getNotes } from '../../../api/cmdbLaptops.api'

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

  return (
    <TextBox className="notes">
      <span>Notas</span>
      {!showForm.show && (
        <div className="notes-container">
          {notesData.map(({id_note, id_laptop, note}) => (
            <div key={id_note} className="note">
              <p>{note}</p>
              <button onClick={() => setShowForm({show: true, mode: 'delete'})}>
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
          />
          <div className="buttons">
            <button onClick={() => setShowForm({show: false, mode: ''})}>Cancelar</button>
            <button className={showForm.mode === 'delete' ? 'delete' : ''}>
              {showForm.mode === 'add' ? 'Guardar' : 'Eliminar'}
            </button>
          </div>
        </div>
      )}
      {!showForm.show && (
        <button onClick={() => setShowForm({show: true, mode: 'add'})}>
          Agregar Nota
        </button>
      )}
    </TextBox>
  )
}
