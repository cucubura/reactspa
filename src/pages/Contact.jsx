import { useState } from 'react'
import { pushEvent } from "../utils/analytics";

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setValues(v => ({ ...v, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! This demo form just shows how you’d capture input.')
    // Replace with real submit (fetch/axios) if you have an API endpoint.

    pushEvent("form_submit", {
      form: "Contact Us",
      name: values.name,
      email: values.email
    });
  }

  return (
    <section className="panel">
      <h1>Contact us</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
        <label>
          <div>Name</div>
          <input
            name="name"
            value={values.name}
            onChange={onChange}
            placeholder="Your name"
            required
            style={inputStyle}
          />
        </label>
        <label>
          <div>Email</div>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            placeholder="you@example.com"
            required
            style={inputStyle}
          />
        </label>
        <label>
          <div>Message</div>
          <textarea
            name="message"
            value={values.message}
            onChange={onChange}
            placeholder="How can we help?"
            rows={5}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={buttonStyle}>Send</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  marginTop: 6,
  padding: '10px 12px',
  borderRadius: 10,
  border: '1px solid #2b3566',
  background: '#0e1634',
  color: '#e6e8ef',
  outline: 'none'
}

const buttonStyle = {
  padding: '10px 14px',
  borderRadius: 10,
  border: '1px solid #2b3566',
  background: 'linear-gradient(135deg, rgba(106,163,255,0.25), rgba(124,246,197,0.18))',
  color: '#fff',
  cursor: 'pointer'
}
