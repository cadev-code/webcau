import { MapInput, MapItem } from './styled'
import { ActionIconButton, UploadFileButton } from '../../../components'
import { Close } from '@mui/icons-material'

export const EditMapAddItem = ({
  addMapData,
  orderMaps,
  addMapInputOnChange,
  cancelAddAction
}) => {
  return (
    <MapItem
      style={{ marginLeft: '42px' }}
    >
      <MapInput
        id="text"
        value={ addMapData.text }
        onChange={ addMapInputOnChange }
      />
      <UploadFileButton
        id="file"
        accept=".jpg, .png, .gif"
        onChangeAction={ addMapInputOnChange }
      />
      <div style={{
        position: 'absolute',
        right: orderMaps.length !== 0 ? '0' : '-58px',
        height: '100%'
      }}>
        <ActionIconButton 
          icon={<Close />}
          action={ cancelAddAction }
        />
      </div>
      <p style={{ 
          position: 'absolute',
          left: orderMaps.length !== 0 ? 'calc(100% + 10px)' : 'calc(100% + 58px + 10px)',
          width: '100%',
          color: addMapData.path !== '' ? '#71ff71' : '#fb7e7e',
          userSelect: 'none',
        }}>
          { addMapData.path !== '' ? addMapData.path : 'Sin archivo' }
        </p>
    </MapItem>
  )
}
