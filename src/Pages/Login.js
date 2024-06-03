import React from 'react';



export default function Login() {
    return (
        <>
            <div className="home_button"><a href="/">Back</a></div>
            <div className="new_css">
                <div classNameName="form">
                    <h1 className="heading">Login</h1>
                    <input type="email" placeholder="email" autocomplete="on" className="new_input" required />
                    <input type="password" placeholder="password" autocomplete="off" className="new_input" required />
                    <button className="submit-btn">Login</button>
                    <a href="register" className="link">Don't have an account? Register</a>
                </div>
            </div>
        </>
    )
}
