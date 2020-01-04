import React from 'react'

export default function LoginModal() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div className='form-item'>
                    <label>Username: 
                    </label>
                    <input type="text" name='username' placeholder='username...' ></input>
                </div>
                <div className='form-item'>
                    <label>Password: 
                    </label>
                    <input type="password" name='password' placeholder='paddword...' ></input>
                </div>
            </form>
        </div>
    )
}
