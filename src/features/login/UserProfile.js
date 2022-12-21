import React from 'react'

export default function UserProfile() {

    const user = JSON.parse(localStorage.getItem("User"));

  return (
    <div>
    <p>User Id: {user.customerId}</p>
    <p>Username: {user.customerName}</p>
    <p>Age: {user.age}</p>
    <p>Gender: {user.gender}</p>
    <p>Self Introduction: {user.selfIntro}</p>
    <p>Status: {user.status}</p>
    </div>
  )
}