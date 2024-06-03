import React from 'react';
import NavBar from '../Components/Navbar';


export default function Welcome() {
    return (
        <>
            <NavBar />
            <section class="first_section1">
                <div class="left_section1">
                    <div class="wel">Welcome to ZCoder</div>
                    <div class="wel1">Improve Your Skills</div>
                </div>
                <div class="right_section1">
                    <ul>
                        <li><a href="li1">Request Demo</a></li>
                        <li><a href="li2">Resources</a></li>
                        <li><a href="li3">Solutions</a></li>
                    </ul>
                </div>
            </section>
            <hr />
            <section class="second_section1">
                <div class="line_1">
                    <p class="line_01">Develop the strongest tech teams around</p>
                    <p>Sharpen your tech skills and pursue job opportunities</p>
                </div>
            </section>
            <section class="third_section">
                <div class="line_2">
                    <button class="Login"><a href="login.html">Login</a></button>
                    <button class="Request_demo"><a href="demo">Request Demo</a></button>
                </div>
            </section>
            <section class="fourth_section">
                <div class="line_3">
                    <p class="li_1">Code is like humor.</p>
                    <p>When you have to explain it, it’s bad!!</p>
                </div>
            </section>
        </>
    )
}
