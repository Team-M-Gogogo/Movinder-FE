import React from 'react'
import moment from 'moment';
import { Row} from "antd";

const NotificationItem = (props) => {
   const movieStartTimeFromTicket = moment(props.booking.session.datetime);
   const movieStartTime = moment(movieStartTimeFromTicket).subtract(0, 'days').calendar();; 
   const TOMORROW = 'Tomorrow';
   const TODAY = 'Today';

    console.log(movieStartTime);
    return (
    (movieStartTime.includes(TOMORROW) || movieStartTime.includes(TODAY))?
    <div >
        <Row ><p>{props.booking.movie.movieName} start at {movieStartTime} </p></Row> </div> : <div></div>)
        };
   
export default NotificationItem;