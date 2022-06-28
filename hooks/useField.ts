import { ChangeEvent, ClipboardEvent, useState } from 'react'

export const useField = (initialValue = '', type: 'url' | 'empty') => {
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
  const regex = new RegExp(urlRegex)

  const [isValid, setIsValid] = useState(false)
  const [value, setValue] = useState(initialValue)

  const validate = (value: string) => {
    switch (type) {
      case 'url':
        setIsValid(value.match(regex) !== null)
        break
      case 'empty':
        setIsValid(value.length > 0)
        break
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    validate(newValue)
  }

  const reset = () => {
    setValue('')
    setIsValid(false)
  }

  return {
    value,
    isValid,
    reset,
    onChange,
  }
}
