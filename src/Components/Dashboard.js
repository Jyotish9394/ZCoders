import React from 'react';
import './Dashboard-c.css';

export default function Navbar(props) {
    return (
        <>
            <section className="dashboard">
                <div className="dash">Your Dashboard</div>
                <section className="dashboard_design">
                    <section className="dash_section_01">
                        <div className="dash_first">
                            <div>CP Rating</div>
                            <div>3748</div>
                            <div>You're Ranked #xyz in ZCoder website</div>
                        </div>
                        <div className="dash_second">
                            <div>Favorite Language</div>
                            <div>C++</div>
                        </div>
                    </section>
                    <section className="dash_section_01">
                        <div className="dash_first">
                            <div>CP Rating</div>
                            <div>3748</div>
                            <div>You're Ranked #xyz in ZCoder website</div>
                        </div>
                        <div className="dash_second">
                            <div>Favorite Lnaguage</div>
                            <div>C++</div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}