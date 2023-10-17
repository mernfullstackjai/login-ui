import React from 'react'
import './LoginComponent.css'

const LoginComponent = () => {
    return (
        <form>
            <label htmlFor="email">EMAIL ID</label>
            <input type='email' id='email' name='email' placeholder='EMAIL' patter="[a-z][0-9]+@+[a-z]" required/>
            <label htmlFor="password">PASSWORD</label>
            <input type='password' id='password' name='password' placeholder='PASSSWORD' required/>
            <button>LOGIN</button>
         </form>
      )
}

export default LoginComponent