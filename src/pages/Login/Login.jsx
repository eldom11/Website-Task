import React from 'react'

function Login() {
  return (
    <div >
      <h1>Login</h1>
      <label htmlFor="email">Email: 
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="password">Password: 
        <input type="password" name="password" id="password" />
      </label>
      <button>Sign In</button>
    </div>
  )
}

export default Login