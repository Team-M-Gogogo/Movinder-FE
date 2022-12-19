import React from 'react'
import Cinema from './Cinema'

export default function CinemaGroup(props) {
  return props.cinemas.map((cinema) => {
    return <Cinema cinema={cinema} key={cinema.cinemaId}/>
  })
}
