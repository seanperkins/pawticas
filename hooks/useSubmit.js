import {useState} from 'react'
import {useEffect} from 'react'

export default function useSubmit() {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

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
      } else {
        setError(`${response.status}: ${response.statusText}`)
        setResult(null)
      }
    } catch (error) {
      setError(`${error.message}`)
      setResult(null)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
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
  }
}
