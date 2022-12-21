import React from 'react'

export default function UserProfile() {
    const localUser = localStorage.getItem("User");
    const user = localUser === "" ? "" : JSON.parse(localStorage.getItem("User"));

  return (
    <div>
    <p>User Id: {user === "" ? "" : user.customerId}</p>
    <p>Username: {user === "" ? "" : user.customerName}</p>
    <p>Age: {user === "" ? "" : user.age}</p>
    <p>Gender: {user === "" ? "" : user.gender}</p>
    <p>Self Introduction: {user === "" ? "" : user.selfIntro}</p>
    <p>Status: {user === "" ? "" : user.status}</p>
    </div>
  )
}