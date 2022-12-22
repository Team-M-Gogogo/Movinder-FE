import React from 'react'
import moment from 'moment';

const NotificationItem = (props) => {
   const movieStartTime_fromTicket = moment(props.booking.session.datetime);
    const movieStartTime = moment(movieStartTime_fromTicket).subtract(0, 'days').calendar();; 

    console.log(movieStartTime);
    return (
    (movieStartTime.includes('Tomorrow') || movieStartTime.includes('Today'))?
    <div >
        <p>{props.booking.movie.movieName} start at {movieStartTime}</p> </div> : <div></div>)
        };
   
export default NotificationItem;
