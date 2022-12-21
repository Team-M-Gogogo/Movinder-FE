import React from 'react'
import NotificationItem from './NotificationItem';
import "./Noti.css"

export const Notification = (props) => {
    const bookings = props.bookings;

return bookings.map((booking, index) => {
    return <div><NotificationItem booking={booking} key={index} /></div>
  });
};