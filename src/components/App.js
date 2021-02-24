import React, { useState } from 'react'
import Post from './Post'
import Title from './Title'
import Submission from './Submission'
import './App.css'

const App = () => {
  const [post, setPost] = useState([])
  const postBox = post.map((props, index) => <Post key={props.id} info={props} d={1} />)
  return (
    <>
      <Title />
      <div className="centerBox">
        <b><h3>New Post</h3></b>
        <Submission onSubmit={r => setPost([...post, r])} responder="" />
      </div>
      <div>
        {postBox}
      </div>
    </>
  )
}
export default App
