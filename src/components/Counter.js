import React, {useState} from 'react'
import './App.css'
import s from 'styled-components'

const Format = s.div`
    display: flex;
    float: right; 
`
const Counter= () => {
    // sets state for the name and post information
    const [count, setCount] = useState(0)
    return (
    <>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
    </head>
    <Format>
        <div id='counter'>
            <svg onClick = {() => {setCount(count+1)}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
            <div class = 'inc'>{count}</div>
            <svg onClick = {() => {setCount(count-1)}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
        </div>
    </Format>
    </>
    )
}

export default Counter