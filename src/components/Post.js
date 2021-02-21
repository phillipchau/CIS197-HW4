import React, {useState} from 'react'
import Submission from './Submission' 
import Counter from './Counter'
import './App.css'
import s from 'styled-components'

const Sub = s.div`
padding-left: 10px; 
border-left: 3px solid black;
margin-top: 5px;
display: block;
`


const Post= ({info, d}) => {
    const [response, setResponse] = useState([])
    const [responseOn, setresponseOn] = useState(false)
    //if our current depth is less than 3, include button content and further replies; else just include the content
    console.log(d)
    console.log(response)
    const data = (
    <> 
         <Counter/>
        <p style = {{color: "blue"}}> {info['name']} </p> 
        <p>{info['data']}</p>
        {d < 3 && (
            <>
            {response.map((prev, indx) => 
                <Post info = {prev} d= {d+1} />
            )}
            <p id = "reply" onClick = {e => {setresponseOn(!responseOn)}} >Reply</p>
            {responseOn && (<Submission onSubmit = {r => {setResponse([...response, r])
                                                          setresponseOn(!responseOn)}}/>)}
            </>
        )}
    </>
    )

    if (d === 1) {
        return (
            <>
             <div className = "postBox"> 
                {data}
            </div>
            </>
        )
    }
    return (<Sub>{data}</Sub>)
}

export default Post