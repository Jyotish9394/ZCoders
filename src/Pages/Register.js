import React from 'react';


export default function Register() {
    return (
        <>
            <div className="new_css">
                <div className="form">
                    <h1 className="heading">Register</h1>
                    <input type="text" placeholder="name" autocomplete="on" className="name" required />
                    <input type="email" placeholder="email" autocomplete="on" className="email" required />
                    <input type="password" placeholder="password" autocomplete="off" className="email" required />
                    <button className="submit-btn">Register</button>
                    <a href="login" className="link">Already have an account? Login</a>
                </div>
            </div>
        </>
    )
}
