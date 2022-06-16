import {useEffect, useRef} from 'react'
import {useState} from 'react'
import ReactInputMask from 'react-input-mask'

import useSubmit from '../hooks/useSubmit'
import {event} from '../utilities/googleAnalytics'

export default function ContactForm({subject}) {
  const [numberOrEmail, setNumberOrEmail] = useState('number')
  const [formSubject, setFormSubject] = useState(subject)
  const {handleSubmit, canSubmit, result, error} = useSubmit()
  const formRef = useRef(null)

  useEffect(() => {
    setFormSubject(subject)
  }, [subject, setFormSubject])

  useEffect(() => {
    if (result) {
      formRef.current.reset()
    }
  }, [result, formRef])

  function handleChange(event) {
    setNumberOrEmail(event.target.value)
  }

  function handleFormSubmit(e) {
    event({
      action: 'submit',
      params: {
        category: 'contact',
        subject: formSubject,
      },
    })
    handleSubmit(e)
  }

  return (
    <form className="form p-4" onSubmit={handleSubmit} ref={formRef}>
      <input type="hidden" name="subject" value={getFormSubject(formSubject)} />
      <h2 className="lead mb-4">We want to hear from you</h2>
      <p>
        Tell us a little bit about what you are looking for and we will get back
        to you soon.
      </p>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          name="name"
          required
        />
        <label htmlFor="name">Your Name</label>
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
                name="phone"
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
                name="email"
                required
              />
              <label htmlFor="email">Email</label>
            </>
          )}
        </div>
      </div>
      {
        // Walks
        formSubject === 'walks' && (
          <>
            <PetsName label="Your Dog's Name" />
            <WalkType />
            <Neighborhood />
          </>
        )
      }
      {
        // Cat Sitting
        formSubject === 'cat-sitting' && (
          <>
            <PetsName label="Your Cat's Name" />
            <AppointmentDate label="Ideal Sitting Date" />
            <Neighborhood />
          </>
        )
      }
      {
        // Photo Sessions
        formSubject === 'photo-session' && (
          <>
            <PetsName label="Your Pet's Name" />
            <AppointmentDate label="Ideal Sitting Date" />
          </>
        )
      }

      <div className="form-floating mb-3">
        <textarea
          type="textarea"
          rows="3"
          className="form-control"
          name="message"
          id="message"
          placeholder="Enter your message"
          style={{height: '5em'}}
          required={formSubject === undefined}
        />
        <label htmlFor="name">Your message</label>
      </div>
      {error && (
        <div className="alert alert-danger">
          We encountered an error: <br /> {error}
        </div>
      )}
      {result && (
        <div className="alert alert-success">
          Thank you for your interest in our services. We will get back to you
          soon.
        </div>
      )}
      <div className="d-grid gap-2">
        <button
          disabled={!canSubmit}
          className="btn btn-primary btn-lg btn-block"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

function Neighborhood() {
  return (
    <div className="form-floating mb-3">
      <select className="form-control" id="neighborhood" name="neighborhood">
        <option value="none">Select your neighborhood</option>
        <option value="scotts-addition">Scott's Addition</option>
        <option value="carytown">Carytown</option>
        <option value="church-hill">Church Hill</option>
        <option value="east-end">East End</option>
        <option value="jackson-ward">Jackson Ward</option>
        <option value="maymont">Maymont</option>
        <option value="monroe-ward">Monroe Ward</option>
        <option value="museum-district">Museum District</option>
        <option value="randolf">Randolf</option>
        <option value="shockoe">Shockoe Bottom</option>
        <option value="fan">The Fan</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="name">Which Neighborhood</label>
    </div>
  )
}

function PetsName({label}) {
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id="pets-name"
        name="pets-name"
        placeholder="Enter pets name"
        required
      />
      <label htmlFor="pets-name">{label}</label>
    </div>
  )
}

function WalkType() {
  return (
    <div className="form-floating mb-3">
      <select className="form-control" id="walk-type" name="walk-type">
        <option value="group-30">Group - 30min</option>
        <option value="group-60">Group - 60min</option>
        <option value="solo-30">Solo - 30 min</option>
        <option value="solo-60">Solo - 60 min</option>
      </select>
      <label htmlFor="name">What Type of Walk</label>
    </div>
  )
}

function AppointmentDate({label}) {
  return (
    <div className="form-floating mb-3">
      <input className="form-control" type="date" id="date" name="date" />
      <label htmlFor="date">{label}</label>
    </div>
  )
}

function getFormSubject(subject) {
  switch (subject) {
    case 'walks':
      return 'Pawticas: Walks'
    case 'cat-sitting':
      return 'Pawticas: Cat Sitting'
    case 'photo-session':
      return 'Pawticas: Photo Sessions'
    default:
      return 'Pawticas: General Inquiry'
  }
}
