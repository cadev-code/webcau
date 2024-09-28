import React, { useState } from 'react'
import { TextBox } from '../ModalData/styled'
import { Close } from '@mui/icons-material'

export const LaptopsNotesData = () => {

  const [showForm, setShowForm] = useState({show: false, mode: ''})

  return (
    <TextBox className="notes">
      <span>Notas</span>
      {!showForm.show && (
        <div className="notes-container">
          <div className="note">
            <p>Nota 1 de Laptop</p>
            <button onClick={() => setShowForm({show: true, mode: 'delete'})}>
              <Close />
            </button>
          </div>
          <div className="note">
            <p>Nota 2 de Laptop</p>
            <button onClick={() => setShowForm({show: true, mode: 'delete'})}>
              <Close />
            </button>
          </div>
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
