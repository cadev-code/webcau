import { useEffect, useRef, useState } from 'react'
import { TextBox } from '../ModalData/styled'

export const ResourcesFiles = ({ resourceData, setHideContent, userIsAdmin }) => {
  const [showForm, setShowForm] = useState({show: false, type: '', mode: ''})
  const [fileToEdit, setFileToEdit] = useState({})

  const dataTest = [
    {id_file: 1, filename: "COBRANZA_GEST_SMARTC_xxxxxxxxxx_xxxxxx.txt", type: "receive", id_resource: 2},
    {id_file: 2, filename: "COBRANZA_IREN_SMARTC_xxxxxxxxxx.txt", type: "receive", id_resource: 2},
    {id_file: 3, filename: "Metas_IRENE.txt", type: "upload", id_resource: 2},
    {id_file: 4, filename: "staff_smartcenter_fecha.txt", type: "upload", id_resource: 2},
    {id_file: 5, filename: "*.doc, *.docx, *.ods, *.pdf, *.pps, *.ppsx, *.ppt, *.pptx, *.txt, *.txtx, *.xls, *.xlsm, *.xlsmx, *.xlsx", type: "upload", id_resource: 2},
  ]

  const input = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const inputOnChange = ({target}) => setInputValue(target.value)

  const openForm = (type, mode) => {
    setShowForm({show: true, type, mode})
    setHideContent(true)
  }

  useEffect(() => {
    showForm.show && showForm.mode !== 'delete' &&
      input.current.focus()
  }, [showForm.show])

  const closeForm = () => {
    setFileToEdit({})
    setShowForm({show: false, type: '', mode: ''})
    setHideContent(false)
    setInputValue('')
  }

  const openEditMode = (type, mode) => {
    openForm(type, mode)
  }
  
  return (
    <>
      {[
        {label: "Archivos por Guardar", type: "upload"},
        {label: "Archivos por Recibir", type: "receive"}
      ].map(({label, type}, i) => (
        <TextBox key={i} className="resources">
          <span>{label}</span>
          <div className="files-container">
            {dataTest.map((file, i) => (file.type === type) && (!showForm.show || showForm.type !== type)  && (
              <div className="file" 
                key={i}
              >
                <p>{file.filename}</p>
                {!showForm.show &&
                  <div>
                    <button className="edit"
                      onClick={() => {
                        openEditMode(type, "edit")
                        setFileToEdit(file)
                        setInputValue(file.filename)
                      }}
                    >
                      Editar
                    </button>
                    <button className="delete"
                      onClick={() => {
                        openEditMode(type, "delete")
                        setFileToEdit(file)
                      }}
                    >
                      Borrar
                    </button>
                  </div>
                }
              </div>
            ))}
          </div>
          {!showForm.show && (
            <div className="actions-container">
              <button
                onClick={() => openForm(type, "add")}
              >
                Agregar Archivo
              </button>
            </div>
          )}
          {showForm.show && showForm.type === type && (
            <div className="form">
              {showForm.mode !== 'add' && (
                <p>{fileToEdit.filename}</p>
              )}
              {showForm.mode !== 'delete' && (
                <input
                  ref={input}
                  type="text"
                  value={inputValue}
                  onChange={inputOnChange}
                />
              )}
              <div>
                {["cancel", "save"].map((btn, i) => (
                  <button key={i}
                    className={
                      (showForm.mode === 'delete' && btn === 'save') 
                      ? 'delete' : ''
                    }
                    onClick={btn === "cancel" ? closeForm : () => {}}
                  >
                    {btn === "cancel" ? "Cancelar" : showForm.mode === 'add' ? "Agregar" : showForm.mode === 'edit' ? "Guardar Cambios" : 'Eliminar'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </TextBox>
      ))}
    </>
  )
}