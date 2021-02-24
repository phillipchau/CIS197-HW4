import React, { useState } from 'react'
import s from 'styled-components'
import Submission from './Submission'
import Counter from './Counter'
import './App.css'

const Sub = s.div`
padding-left: 10px; 
border-left: 3px solid black;
margin-top: 5px;
display: block;
`

const Post = ({info, d}) => {
  const [response, setResponse] = useState([])
  const [responseOn, setresponseOn] = useState(false)
  /*
   if our current depth is less than 3, include button content and
   further replies; else just include the content */
  const data = (
    <>
      <Counter />
      <b>
        <p style={{ color: 'blue' }}>
          {info.name}
        </p>
      </b>
      <p>{info.data}</p>
      {d < 3 && (
        <>
            {response.map(prev => <Post key={prev.id} info={prev} d={d + 1} />)}
          <p
            role="presentation"
            id="reply"
            onKeyDown={e => {
              setresponseOn(!responseOn)
            }}
            onClick={e => {
              setresponseOn(!responseOn)
            }}
          >
            Reply
          </p>
            {responseOn && (
            <Submission
              onSubmit={r => {
                setResponse([...response, r])
                setresponseOn(!responseOn)
              }}
              responder={`@${info.name}`}
            />
            )}
        </>
      )}
    </>
  )

  if (d === 1) {
    return (
      <>
        <div className="postBox">
          {data}
        </div>
      </>
    )
  }
  return (<Sub>{data}</Sub>)
}

export default Post
