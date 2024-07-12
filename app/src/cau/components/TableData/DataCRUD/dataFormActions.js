export const dataFormActions = (
  setOpenModal,
  setDataToShow,
  addMode,
  setAddMode,
  addRowMethod,
  updateRowMethod,
  deleteRowMethod,
  setAlertState,
  resetAlertState,
  refreshData
) => {

  const showModalData = (data) => {
    setOpenModal(true)
    setDataToShow(data)
  }

  const showAddModalData = () => {
    setOpenModal(true)
    setAddMode(true)
  }

  const closeModalData = () => {
    setOpenModal(false)
    setDataToShow({})
    setAddMode(false)
  }

  const submitData = async (data) => {
    try {
      if (addMode) {
        await addRowMethod(data)
      } else {
        await updateRowMethod(data)
      }
      setAlertState({
        message: `Los datos se ${addMode ? 'agregaron' : 'actualizaron'} correctamente`,
        severity: 'success',
        itShow: true
      })
      resetAlertState()
      closeModalData()
    } catch (error) {
      setAlertState({
        message: 'Hubo un error en el servidor, informa al administrador',
        severity: 'error',
        itShow: true
      })
      resetAlertState()
      closeModalData()
      return
    }
    await refreshData()
  }

  const deleteData = async (data) => {
    try {
      await deleteRowMethod(data)
      setAlertState({
        message: 'Datos eliminados correctamente',
        severity: 'success',
        itShow: true
      })
      resetAlertState()
      closeModalData()
    } catch (error) {
      setAlertState({
        message: 'Hubo un error en el servidor, informa al administrador',
        severity: 'error',
        itShow: true
      })
      resetAlertState()
      closeModalData()
      return
    }
    await refreshData()
  }

  return {
    showModalData,
    showAddModalData,
    closeModalData,
    submitData,
    deleteData
  }
}
