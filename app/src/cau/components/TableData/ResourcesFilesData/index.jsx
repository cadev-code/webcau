import { useEffect, useRef, useState } from 'react'
import { TextBox } from '../ModalData/styled'
import { addFile, deleteFile, getFiles, updateFile } from '../../../api/cmdbResources.api'
import { Alert } from '../../../../components/Alert'
import { alertActions } from '../../../helpers/alertActions'
import { breadcrumbsClasses } from '@mui/material'

export const ResourcesFiles = ({ resourceData, setHideContent, userIsAdmin }) => {

  const [filesData, setFilesData] = useState([])
  const getFilesData = async() => {
    const { data } = await getFiles(resourceData.id_resource)
    setFilesData(data)
  }

  useEffect(() => {
    getFilesData()
  }, [])

  const [showForm, setShowForm] = useState({show: false, type: '', mode: ''})
  const [fileToEdit, setFileToEdit] = useState({})

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

  const formSubmit = async(type = '') => {
    if(showForm.mode !== 'delete' && inputValue.length < 2) {
      setAlertState({message: "El nombre del archivo debe tener al menos 2 caracteres.", severity: "error", itShow: true})
      resetAlertState()
      return
    }
    try {
      switch(showForm.mode) {
        case 'add':
          await addFile({
            filename: inputValue, 
            type,
            id_resource: resourceData.id_resource,
          })
          break;
        case 'edit': 
          await updateFile({
            id_file: fileToEdit.id_file,
            filename: inputValue,
          })
          break;
        case 'delete':
          await deleteFile(fileToEdit.id_file)
          break;
      }
      await getFilesData()
      closeForm()
      setAlertState({
        message: 'Archivo ' + (showForm.mode === 'add'? 'agregado' : 'actualizado') + ' correctamente.',
        severity: 'success',
        itShow: true
      })
      resetAlertState()
    } catch (error) {
      setAlertState({
        message: 'Hubo un error en el servidor, intente nuevamente.',
        severity: 'error',
        itShow: true
      })
      resetAlertState()
    }
  }

  const {
    alertState,
    setAlertState,
    resetAlertState,
    changeStateAlert
  } = alertActions()
  
  return (
    <>
      {[
        {label: "Archivos por Guardar", type: "upload"},
        {label: "Archivos por Recibir", type: "receive"}
      ].map(({label, type}, i) => (
        <TextBox key={i} className="resources">
          <span>{label}</span>
          <div className="files-container">
            {filesData.map((file, i) => (file.type === type) && (!showForm.show || showForm.type !== type)  && (
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
                    onClick={btn === "cancel" ? closeForm : () => formSubmit(type)}
                  >
                    {btn === "cancel" ? "Cancelar" : showForm.mode === 'add' ? "Agregar" : showForm.mode === 'edit' ? "Guardar Cambios" : 'Eliminar'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </TextBox>
      ))}
      <Alert 
        text={ alertState.message }
        severity={ alertState.severity }
        showAlert={ alertState.itShow }
        setShowAlert={ changeStateAlert }
      />
    </>
  )
}