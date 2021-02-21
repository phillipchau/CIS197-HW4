import React, {useState} from 'react'
import './App.css'

const Submission= ({onSubmit}) => {
    // sets state for the name and post information
    const [name, setName] = useState('')
    const [data, setData] = useState('')
    const [button, setButton] = useState(true)
    if ((name === '' || data === '') && !button) {
        setButton(true)
    }
    if ((name !== '' && data !== '') && button) {
        setButton(false)
    }

    return (
    <>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
    </head>
    <form onSubmit = {e => {
                            e.preventDefault()
                            onSubmit({name, data})
                            setName('')
                            setData('')
                          }
                        }>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id = "name" className = "form-control" type = "text" value={name} onChange = {e => setName(e.target.value)} placeholder="Name..."/>
        </div>
        <div className="form-group">
            <label htmlFor="text">Post</label>
            <textarea id = "text" className = "form-control" rows="3" value = {data} onChange = {e => setData(e.target.value)} placeholder = "Write a new post..."/>
        </div>
        <button id = "submitbutton" type="submit" className="btn btn-primary" disabled = {button}>Submit</button>
    </form>
    </>
    )
}

export default Submission