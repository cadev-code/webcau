// api imports
import { 
  addData, 
  deleteData, 
  updateData
 } from '../../api/cmdb.api'

export const cmdbActions = (
  formDataValues,
  setData,
  data,
  setAlertState,
  resetAlertState,
  setFormDataValues,
  setShowWindow,
  formInitialValues
) => {

  // add data
  const submitAddData = async() => {
    try {
      const response = await addData(formDataValues)
      const newData = response.data
      setData([newData[0], ...data])
      setShowWindow('')
      setFormDataValues(formInitialValues)

      setAlertState({ message: 'Datos guardados correctamente.', severity: 'success', itShow: true })
      resetAlertState()
    } catch (error) {
      setAlertState({ message: 'Hubo un error al intentar guardar los datos.', severity: 'error', itShow: true })
      resetAlertState()
    }

  }

  // edit data
  const submitEditData = async() => {
    try {
      const response = await updateData(formDataValues)
      const newData = response.data[0]
      setData(data.map(reg => reg.id === formDataValues.id ? newData : reg ))
      setShowWindow('')
      setFormDataValues(formInitialValues)

      setAlertState({ message: 'Datos actualizados correctamente.', severity: 'success', itShow: true })
      resetAlertState()
    } catch (error) {
      setAlertState({ message: 'Hubo un error al intentar actualizar los datos.', severity: 'error', itShow: true })
      resetAlertState()
    }
  }

  // delete data
  const submitDeleteData = async(id) => {
    try {
      await deleteData(id)
      await setData(data.filter(reg => reg.id !== id))
      setShowWindow('')
      
      setAlertState({ message: 'Datos eliminados correctamente.', severity: 'success', itShow: true })
      resetAlertState()
    } catch (error) {
      setAlertState({ message: 'Hubo un error al intentar eliminar los datos..', severity: 'error', itShow: true })
      resetAlertState()
    }
  }

  return {
    submitAddData,
    submitEditData,
    submitDeleteData
  }
}