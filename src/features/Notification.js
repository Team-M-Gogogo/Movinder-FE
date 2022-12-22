import React from 'react'
import NotificationItem from './NotificationItem';
import "./Noti.css"

export const Notification = (props) => {
    const bookings = props.bookings;

return bookings.map((booking, index) => {
    return <div key={index}><NotificationItem booking={booking}  /></div>
  });
};