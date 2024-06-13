import { useState } from 'react'

export const listNameFormState = (setActiveForm) => {
  const [showForm, setShowForm] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)

  const inputOnChange = ({target}) => {
    setInputValue(target.value)
    target.value === '' ? setInvalidInput(true) :  setInvalidInput(false)
  }

  const closeForm = () => {
    setShowForm(false)
    setInputValue('')
    setInvalidInput(false)
    setActiveForm(false)
  }

  return {
    showForm,
    setShowForm,
    inputValue,
    setInputValue,
    invalidInput,
    setInvalidInput,
    inputOnChange,
    closeForm
  }
}
