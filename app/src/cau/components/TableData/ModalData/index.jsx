import { useEffect, useRef, useState } from 'react'
import { ActionBtns, BoxContainer, CloseBtn, FormBtns, Modal, TextBox } from './styled'
import { Alert, BackgroundOpacity, ConfirmDialog } from '../../../../components'
import { Close, Delete, Edit } from '@mui/icons-material'
import { alertActions } from '../../../helpers/alertActions'
import { ResourcesFiles } from '../ResourcesFilesData'
import { UserResourcesData } from '../UserResourcesData'
import { LaptopsNotesData } from '../LaptopsNotesData'
import { ListUsersResources } from '../ListUsersResources'
import { DownloadResourceData } from '../DownloadResourceData'
import { AssetsEmailLists } from '../AssetsEmailLists'

export const ModalData = ({
  data,
  addMode = false,
  defaultInputChanges = {},
  boxes,
  closeModalData,
  submitData,
  deleteData,
  version,
  userIsAdmin,
  refreshData
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

  const [resourceDataToExport, setResourceDataToExport] = useState({
    files: [],
    users: []
  })

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
                      : (meta && meta.filterVariant === 'date')
                        ? <input
                            id={ accessorKey }
                            type='date'
                            value={inputChanges[accessorKey]}
                            onChange={ inputOnChange }
                            required
                          />
                        : <input
                            id={ accessorKey }
                            type={ inputType || 'text' }
                            value={ inputChanges[accessorKey] }
                            onChange={ inputOnChange }
                            required
                          />}
            </TextBox>
          ))}
          {!editMode && !addMode && version === 'resources' && (
            <ResourcesFiles
              resourceData={data}
              hideContent={hideContent}
              setHideContent={setHideContent}
              setResourceDataToExport={setResourceDataToExport}
              userIsAdmin={userIsAdmin}
            />
          )}
          {!editMode && !addMode && version === 'directory' && (
            <UserResourcesData 
              id_user={data.id_user}
              alertState={{
                setAlertState,
                resetAlertState
              }}
              userIsAdmin={userIsAdmin}
            />
          )}
          {!editMode && !addMode && version === 'laptops' && (
            <LaptopsNotesData 
              id_laptop={data.id_laptop}
              userIsAdmin={userIsAdmin}
            />
          )}
          {version === 'resources' && !hideContent && !editMode && !addMode && (
            <DownloadResourceData 
              resource={data}
              resourceDataToExport={resourceDataToExport}
            />
          )}
        </BoxContainer>
        {version === 'resources' && !editMode && !addMode && (
          <ListUsersResources 
            id_resource={data.id_resource}
            hideContent={hideContent}
            setHideContent={setHideContent}
            setResourceDataToExport={setResourceDataToExport}
            userIsAdmin={userIsAdmin}
          />
        )}
        {!editMode && !addMode && version === 'assets_emails' && (
          <AssetsEmailLists
            id_register={data.id_register}
            hideContent={hideContent}
            setHideContent={setHideContent}
            userIsAdmin={userIsAdmin}
            refreshData={refreshData}
          />
        )}
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