import React from 'react'
import UserBookingList from '../features/UserBookingList';
import UserProfile from "../features/UserProfile";

export default function UserProfilePage() {
  return <div>
    <UserProfile />
    <UserBookingList/>
  </div>;
}