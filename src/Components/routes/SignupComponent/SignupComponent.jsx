import React from 'react'
import './SignupComponent.css'

const SignupComponent = () => {
    return (

        <form>
            <label htmlFor="firstname">FIRST NAME</label>
            <input type='text' id="firstname" name='firstname' placeholder='FIRST NAME'  required/>
            <label htmlFor="lastname">LAST NAME</label>
            <input type='text'placeholder='LAST NAME'  id='lastname' name='lastname'  required/>
            <label htmlFor="email">EMAIL ID</label>
            <input type='email' id='email' name='email' placeholder='EMAIL' required/>
            <label htmlFor="password">PASSWORD</label>
            <input type='password' id='password' name='password' placeholder='PASSSWORD' required/>
    
            <button>SIGNUP</button>
    
            </form>
      )
}

export default SignupComponent