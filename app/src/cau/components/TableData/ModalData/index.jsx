import { useEffect, useRef, useState } from 'react'
import { 
  ActionBtns,
  BoxContainer, 
  CloseBtn, 
  FormBtns, 
  Modal, 
  TextBox 
} from './styled'
import { Alert, BackgroundOpacity, ConfirmDialog } from '../../../../components'
import { 
  Close, 
  Delete, 
  Edit 
} from '@mui/icons-material'
import { alertActions } from '../../../helpers/alertActions'

export const ModalData = ({
  data,
  addMode = false,
  defaultInputChanges = {},
  boxes,
  closeModalData,
  submitData,
  deleteData,
  version,
  userIsAdmin
}) => {

  // edit mode
  const [editMode, setEditMode] = useState(false)
  const [inputChanges, setInputChanges] = useState(addMode ? defaultInputChanges : {})
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const inputOnChange = ({target}) => {
    const { id, value } = target
    setInputChanges(changes => ({
      ...changes,
      [id]: value
    }))
  }

  const closeEditMode = () => {
    setEditMode(false)
    setInputChanges({})
  }

  const { alertState, setAlertState, resetAlertState, changeStateAlert } = alertActions()

  const formValidation = async() => {
    if(Object.values(inputChanges).includes('')) {
      setAlertState({message: 'Los campos no pueden estar vacíos', severity: 'error', itShow: true})
      resetAlertState()
      return
    }

    await submitData(inputChanges)
    closeEditMode()
  }

  const boxContainer = useRef(null)
  const [boxContainerHeight, setBoxContainerHeight] = useState(480)

  useEffect(() => {
    setBoxContainerHeight(boxContainer.current.offsetHeight)
  }, [boxes])

  const [hideContent, setHideContent] = useState(false)

  return (
    <BackgroundOpacity>
      <Modal>
        <BoxContainer
          ref={ boxContainer }
          boxContainerHeight={ boxContainerHeight }
        >
          {boxes.map(({header, accessorKey, meta, required, inputType}) => (
            <TextBox key={ accessorKey }>
              <span>{ required && (editMode || addMode) ? `${header} *` : header }</span>
              {!editMode && !addMode
                  ? <p>{ data[accessorKey] }</p>
                  : (meta && meta.filterVariant === 'select')
                      ? <select
                          id={ accessorKey }
                          value={ inputChanges[accessorKey] }
                          onChange={ inputOnChange }
                        >
                          {
                            ['', ...meta.options].map((option, i) => (
                              <option key={ i } 
                                value={ option }
                              >
                                { option }
                              </option>
                            ))
                          }
                        </select>
                      : <input
                          id={ accessorKey }
                          type={ inputType || 'text' }
                          value={ inputChanges[accessorKey] }
                          onChange={ inputOnChange }
                          required
                        />}
            </TextBox>
          ))}
          {!editMode && !addMode && version === "resources" && (
            <ResourcesFiles 
              resourceData={data}
              setHideContent={setHideContent}
              userIsAdmin={userIsAdmin}
            />
          )}
        </BoxContainer>
        <CloseBtn
          onClick={closeModalData}
        >
          <Close />
        </CloseBtn>
        {
          userIsAdmin && !hideContent &&
            <>
              {!editMode && !addMode ?
                (
                  <ActionBtns>
                    <div
                      onClick={() => {
                        setEditMode(mode => !mode)
                        setInputChanges(data)
                      }}
                    >
                      <Edit />
                    </div>
                    <div
                      onClick={() => setShowConfirmDialog(true)}
                    >
                      <Delete />
                    </div>
                  </ActionBtns>
                ) : (
                  <FormBtns>
                    <button
                      onClick={() => addMode ? closeModalData() : closeEditMode()}
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={formValidation}
                    >
                      { addMode ? 'Agregar' : 'Guardar' }
                    </button>
                  </FormBtns>
                )}
            </>
        }
      </Modal>
      {
        showConfirmDialog &&
          <BackgroundOpacity>
            <ConfirmDialog 
              text="¿Borrar registro?"
              actionCancel={() => setShowConfirmDialog(false)}
              actionSubmit={() => deleteData(data)}
            />
          </BackgroundOpacity>
      }
      <Alert
        text={ alertState.message }
        showAlert={ alertState.itShow }
        setShowAlert={ changeStateAlert }
        severity={ alertState.severity }
      />
    </BackgroundOpacity>
  )
}

const ResourcesFiles = ({ resourceData, setHideContent, userIsAdmin }) => {

  const [showForm, setShowForm] = useState({show: false, type: '', mode: ''})
  const [fileToEdit, setFileToEdit] = useState({})

  const dataTest = [
    {id_file: 1, file: "COBRANZA_GEST_SMARTC_xxxxxxxxxx_xxxxxx.txt", type: "receive", id_resource: 2},
    {id_file: 2, file: "COBRANZA_IREN_SMARTC_xxxxxxxxxx.txt", type: "receive", id_resource: 2},
    {id_file: 3, file: "Metas_IRENE.txt", type: "upload", id_resource: 2},
    {id_file: 4, file: "staff_smartcenter_fecha.txt", type: "upload", id_resource: 2},
    {id_file: 5, file: "*.doc, *.docx, *.ods, *.pdf, *.pps, *.ppsx, *.ppt, *.pptx, *.txt, *.txtx, *.xls, *.xlsm, *.xlsmx, *.xlsx", type: "upload", id_resource: 2},
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
                <p>{file.file}</p>
                {!showForm.show &&
                  <div>
                    <button className="edit"
                      onClick={() => {
                        openEditMode(type, "edit")
                        setFileToEdit(file)
                        setInputValue(file.file)
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
                <p>{fileToEdit.file}</p>
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