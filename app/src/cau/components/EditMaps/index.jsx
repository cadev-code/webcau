// componentes imports
import { 
  Container, 
  MapContainer
} from './styled'
import { 
  BackgroundOpacity, 
  ConfirmDialog, 
} from '../../../components'
import { DndContext } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { EditMapAddItem } from '..'
import { EditMapItem } from '../EditMapItem'
import { updateMapOrder } from '../../api/maps.api'

export const EditMaps = ({
  title,
  mapsData,
  orderMaps,
  setOrderMaps,
  setMapsData,
  loadMaps,
  addMap,
  setAddMap,
  addMapData,
  setAddMapData,
  mapChanges,
  setMapChanges,
  deleteData,
  setDeleteData,
  deleteMapAction,
}) => {

  const getPropData = (order, prop) => {
    return mapsData.filter(data => data.id === order)[0][prop]
  }

  const mapInputOnChange = ({ target }) => {
    if(target.type === 'text') {
      const { id, value } = target
      const change = {id, text: value}

      setMapsData(data => data.map(map => (
        map.id === Number(id)
        ? {...map, text: value}
        : map
      )))

      setMapChanges(changes => changes.filter(map => map.id === id).length !== 0
        ? changes.map(map => map.id === id
            ? {...map, ...change}
            : map
          )
        : [...changes, change]
      )
    } else if(target.type === 'file' && target.files.length !== 0) {
      const { id, files } = target
      const beforePath = mapsData.filter(map => map.id === Number(id))[0].path
      const change = {id, file: files[0], path: files[0].name, beforePath }

      setMapChanges(changes => changes.filter(map => map.id === id).length !== 0
        ? changes.map(map => map.id === id
            ? {...map, ...change}
            : map
          )
        : [...changes, change]
      )
    }
  }
  
  const removeFileOnChange = (id) => {
    const changeToRemove = mapChanges.filter(change => change.id === String(id))[0]

    if(changeToRemove.text) {
      const { file, path, beforePath, ...restChange } = changeToRemove
      setMapChanges(mapChanges.map(change => change.id === String(id)
        ? {...restChange}
        : change
      ))
      
      return
    }
  
    setMapChanges(changes => changes.filter(change => change.id !== String(id)))
  }

  const addMapInputOnChange = ({target}) => {
    target.id === 'text'
      ? setAddMapData({...addMapData, [target.id]: target.value})
      : setAddMapData({...addMapData, path: target.files[0].name, [target.id]: target.files[0]})
  }

  const cancelAddAction = () => {
    setAddMap(false)
    setAddMapData({ text: '', path: '', file: '' })
  }

  const handleDragEnd = async(event) => {
    const { active, over } = event
    
    if(over && active.id !== over.id) {
      const oldIndex = orderMaps.findIndex(item => item === active.id)
      const newIndex = orderMaps.findIndex(item => item === over.id)
      const newOrder = arrayMove(orderMaps, oldIndex, newIndex)
      setOrderMaps(newOrder)
      await updateMapOrder({ order: JSON.stringify(newOrder) })
      await loadMaps()
    }
  }
  
  return (
    <>
      <Container>
        <h1>{ title }</h1>
        <MapContainer>
          <DndContext onDragEnd={ handleDragEnd }>
            <SortableContext items={ orderMaps }>
              {
                orderMaps.map((order) => (
                  <EditMapItem 
                    key={ getPropData(order, 'id') }
                    order={ order }
                    getPropData={ getPropData }
                    mapInputOnChange={ mapInputOnChange }
                    addMap={ addMap }
                    setDeleteData={ setDeleteData }
                    mapChanges={ mapChanges }
                    removeFileOnChange={ removeFileOnChange }
                  />
                ))
              }
            </SortableContext>
          </DndContext>
          {
            addMap &&
            <EditMapAddItem 
              addMapData={ addMapData }
              orderMaps={ orderMaps }
              addMapInputOnChange={ addMapInputOnChange }
              cancelAddAction={ cancelAddAction }
            />
          }
        </MapContainer>
      </Container>
      {
        deleteData.showDialogConfirm &&
        <BackgroundOpacity>
          <ConfirmDialog
            text="Borrar Mapa"
            actionCancel={ () => setDeleteData({showDialogConfirm: false, id: '', path: ''}) }
            actionSubmit={ deleteMapAction }
          />
        </BackgroundOpacity>
      }
    </>
  )
}
