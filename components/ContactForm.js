import {useState} from 'react'
import ReactInputMask from 'react-input-mask'

export default function ContactForm() {
  const [numberOrEmail, setNumberOrEmail] = useState('number')

  function handleChange(event) {
    setNumberOrEmail(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(`submitted`)
  }

  return (
    <form className="form bg-white p-3" onSubmit={handleSubmit}>
      <h2>We want to hear from you</h2>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          required
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-group mb-3">
        <button
          className={`btn ${
            numberOrEmail === 'number'
              ? 'btn-secondary'
              : 'btn-outline-secondary'
          }`}
          onClick={handleChange}
          value="number"
          type="button"
        >
          Phone
        </button>
        <button
          className={`btn ${
            numberOrEmail === 'email'
              ? 'btn-secondary'
              : 'btn-outline-secondary'
          }`}
          onClick={handleChange}
          value="email"
          type="button"
        >
          Email
        </button>
        <div className="form-floating floating-input">
          {numberOrEmail === 'number' ? (
            <>
              <ReactInputMask
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter phone"
                required
                mask="999-999-9999"
              />
              <label htmlFor="phone">Phone</label>
            </>
          ) : (
            <>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
              <label htmlFor="email">Email</label>
            </>
          )}
        </div>
      </div>
      <div className="form-floating mb-3">
        <textarea
          type="textarea"
          rows="3"
          className="form-control"
          id="message"
          placeholder="Enter your message"
          style={{height: '5em'}}
        />
        <label htmlFor="name">Your message</label>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}
