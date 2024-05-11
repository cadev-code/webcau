export const optionActions = (
  data,
  setData,
  addMode,
  setAddMode,
  addInputValue,
  setAddInputValue,
  inputChange,
  setInputChange,
  setShowDeleteConfirm,
  optionToDelete,
  setOptionToDelete,
  addOptionMethod,
  updateOptionMethod,
  deleteOptionMethod,
  refreshOptions,
  setAlertState,
  resetAlertState
) => {

  const closeAddMode = () => {
    setAddMode(false)
    setAddInputValue({text: ''})
  }

  const changeEditMode = (id) => {
    setData(data => data.map(
      option => option.id === id
        ? {
          ...option,
          editMode: !option.editMode
        } : option
    ))
  }

  const showEditMode = (option) => {
    changeEditMode(option.id)
    setInputChange(option)
  }

  const closeEditMode = (option) => {
    changeEditMode(option.id)
    setInputChange({})
  }

  const changeDeleteMode = (id) => {
    setData(data => data.map(
      option => {
        if(option.id === id) {
          setInputChange(option)
          return {
            ...option,
            deleteMode: !option.deleteMode
          }
        }
        return option
      }
    ))
  }

  const showAlert = (message, severity) => {
    setAlertState({
      message, 
      severity, 
      itShow: true
    })
    resetAlertState()
  }

  const submitData = async() => {

    if(addMode) {
      if(addInputValue.text === '') return

      if(data.filter(option => option.text.trim() === addInputValue.text.trim()).length > 0) {
        showAlert('No puedes repetir información, valida los datos', 'warning')
        return
      }

      try {
        await addOptionMethod(addInputValue)
        closeAddMode()
        showAlert('Datos agregados correctamente', 'success')
      } catch (error) {
        showAlert('Hubo un error, informa al administrador', 'error')
      }

    } else {
      try {
        const { id, text } = inputChange

        if(data.filter(option => option.id === id)[0].text === text) {
          await refreshOptions()
          return
        }

        if(text === '') return

        if(data.filter(option => option.text.trim() === text.trim()).length > 0) {
          showAlert('No puedes repetir información, valida los datos', 'warning')
          return
        }

        await updateOptionMethod({id, text})
        showAlert('Datos actualizados correctamente', 'success')
      } catch (error) {
        showAlert('Hubo un error, informa al administrador', 'error')
      }
    }

    await refreshOptions()
  }

  
  const deleteData = async() => {
    try {
      await deleteOptionMethod(optionToDelete.id)
      setShowDeleteConfirm(false)
      setOptionToDelete({})
      showAlert('Datos eliminados correctamente', 'success')
    } catch (error) {
      setShowDeleteConfirm(false)
      showAlert('Hubo un error, informa al administrador', 'error')
    }

    await refreshOptions()
  }

  return {
    closeAddMode,
    showEditMode,
    closeEditMode,
    changeDeleteMode,
    submitData,
    deleteData
  }
}