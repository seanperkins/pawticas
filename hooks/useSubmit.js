import {useState} from 'react'
import {useEffect} from 'react'

export default function useSubmit() {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [canSubmit, setCanSubmit] = useState(true)

  async function sendMessage(data) {
    const url = '/api/contact'
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        setResult(await response.json())
        setError(null)
        setCanSubmit(true)
      } else {
        setError(`${response.status}: ${response.statusText}`)
        setResult(null)
        setCanSubmit(true)
      }
    } catch (error) {
      setError(`${error.message}`)
      setResult(null)
      setCanSubmit(true)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setCanSubmit(false)
    const form = e.target
    const elements = form.elements
    const data = {}
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      if (element.name) {
        data[element.name] = element.value
      }
    }
    sendMessage(data)
  }

  return {
    handleSubmit,
    result,
    error,
    canSubmit,
  }
}
