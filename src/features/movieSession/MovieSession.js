import React from 'react'
import Cinema from '../Cinema'
import DisplayMovie from '../DisplayMovie'
import SessionLists from './SessionLists'

function MovieSession() {
  return (
    <>
    <DisplayMovie/>
    {/* <Cinema cinema={cinema}/> */}
    <div> Available Session</div>
    <SessionLists/>
    </>
  )
}

export default MovieSession