import React, { useState } from 'react'
import './App.css'

const Submission = ({ onSubmit, responder }) => {
  // sets state for the name and post information
  const [name, setName] = useState('')
  const [data, setData] = useState(responder)
  const [button, setButton] = useState(true)
  // use the current datetime to ensure a unique id for every element
  const id = Date.now()
  if ((name === '' || data === '') && !button) {
    setButton(true)
  }
  if ((name !== '' && data !== '') && button) {
    setButton(false)
  }

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        onSubmit({ name, data, id })
        setName('')
        setData('')
      }}
      >
        <div className="form-group">
          <input id="name" className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name..." />
        </div>
        <div className="form-group" style={{ marginTop: 20 }}>
          <textarea id="text" className="form-control" rows="3" value={data} onChange={e => setData(e.target.value)} placeholder="Write a new post..." />
        </div>
        <button id="submitbutton" type="submit" className="btn btn-primary" disabled={button}>Submit</button>
      </form>
    </>
  )
}

export default Submission
