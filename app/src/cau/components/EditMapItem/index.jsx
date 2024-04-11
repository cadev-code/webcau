import { 
  Delete, 
  DragIndicator 
} from '@mui/icons-material'
import { 
  MapInput, 
  MapItem 
} from './styled'
import { 
  ActionIconButton, 
  UploadFileButton 
} from '../../../components'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useRef } from 'react'

export const EditMapItem = ({
  order,
  getPropData,
  mapInputOnChange,
  addMap,
  setDeleteData,
  mapChanges,
  removeFileOnChange,
  permissions
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: getPropData(order, 'id'),
    disabled: addMap
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const fileInputRef = useRef(null)

  const resetInputFile = () => {
    fileInputRef.current.value = null
    removeFileOnChange(getPropData(order, 'id'))
  }

  return (
    <MapItem
      style={ style }
      ref={ setNodeRef }
    >
      <DragIndicator
        style={{ 
          fontSize: '32px',
          color: 'var(--opacity-text)',
          cursor: !addMap ? 'grab' : 'default',
          outline: 'none'
        }}
        {...attributes}
        {...listeners}
      />
      <MapInput
        id={ getPropData(order, 'id') }
        value={ getPropData(order, 'text') }
        onChange={ mapInputOnChange }
        disabled={ addMap }
        onClick={() => console.log('click')}
      />
      <UploadFileButton
        id={ getPropData(order, 'id') }
        accept=".jpg, .png, .gif"
        onChangeAction={ mapInputOnChange }
        disabled={ addMap }
        refInput={ fileInputRef }
      />
      <ActionIconButton
        icon={<Delete />}
        action={ () => setDeleteData({showDialogConfirm: true, id: getPropData(order, 'id'), path: getPropData(order, 'path')}) }
        disable={ addMap }
      />
      <p style={{ 
        position: 'absolute',
        left: 'calc(100% + 10px)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontSize: '16px',
        color: !addMap ? '#71ff71' : 'grey',
        userSelect: 'none',
      }}>
        {
          mapChanges.filter(map => map.id === String(getPropData(order, 'id')))[0]?.path
        }
        {
          mapChanges.filter(map => map.id === String(getPropData(order, 'id')))[0]?.path &&
          <span
            style={{
              fontSize: '14px',
              color: !addMap ? 'white' : 'grey',
              cursor: !addMap ? 'pointer' : 'default'
            }}
            onClick={ () => {
              !addMap &&
              resetInputFile()
            }}
          >
            X
          </span>
        }
      </p>
    </MapItem>
  )
}
