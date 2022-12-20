import React from 'react'
import Cinema from '../Cinema'
import DisplayMovie from '../DisplayMovie'
import SessionLists from './SessionLists'

function MovieSession() {
  return (
    <>
    <DisplayMovie/>
    <Cinema cinema={"63a03cdca8c97353fa8cb52e"}/>
    <div> Available Session</div>
    <SessionLists/>
    </>
  )
}

export default MovieSession