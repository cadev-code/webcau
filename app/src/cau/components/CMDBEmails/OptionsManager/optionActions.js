export const optionActions = (
  setData,
  setAddMode,
  setAddInputValue,
  setInputChange,
  setOptionToDelete
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
      option => option.id === id
        ? {
          ...option,
          deleteMode: !option.deleteMode
        } : option
    ))
  }

  return {
    closeAddMode,
    showEditMode,
    closeEditMode,
    changeDeleteMode
  }
}