import React from 'react'
import './Login_01.css';

export default function Login() {
    return (
        <>
            <div classNameName="form">
                <h1 className="heading">Login</h1>
                <input type="email" placeholder="email" autocomplete="on" className="email" required />
                <input type="password" placeholder="password" autocomplete="off" className="email" required />
                <button className="submit-btn">Login</button>
                <a href="register.html" className="link">Don't have an account? Register</a>
            </div>
        </>
    )
}
