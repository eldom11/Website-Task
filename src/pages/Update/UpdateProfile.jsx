import React from 'react'

function UpdateProfile() {
  return (
    <div>
      <img src="###" alt="foto profile" />
      <label htmlFor="profile">Profile URL
        <input type="image" src="" alt="" />
      </label>
      <label htmlFor="name">Name
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="email">Email
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="Password">Password
        <input type="password" name="password" id="password" />
      </label>

    </div>
  )
}
export default UpdateProfile