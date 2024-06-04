import React from 'react';


export default function Register() {
    return (
        <>
            <div className="home_button"><a href="/">Back</a></div>
            <div className="new_css">
                <div className="form">
                    <h1 className="heading">Register</h1>
                    <input type="text" placeholder="name" autocomplete="on" className="name" required />
                    <input type="email" placeholder="email" autocomplete="on" className="email" required />
                    <input type="password" placeholder="password" autocomplete="off" className="email" required />
                    <input type="text" placeholder="Username" autocomplete="off" className="userName" required />
                    <input type="text" placeholder="CP Rating" autocomplete="of" className="CPRating" />
                    <input type="text" placeholder="Fav Language" autocomplete="of" className="CPRating" />
                    <button className="submit-btn">Register</button>
                    <a href="login" className="link">Already have an account? Login</a>
                </div>
            </div>
        </>
    )
}
