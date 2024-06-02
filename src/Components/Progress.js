import React from 'react';
import './Progress.css';
import cppImage from './Images/pngwing.com.png';
import pythonImage from './Images/python.com.png';
import javaImage from './Images/java.com.png';
import jsImage from './Images/js.png';


export default function Navbar(props) {
    return (
        <>
            <div className="line">Your Preparation</div>
            <section className="second_section">
                <div className="left_section_02">
                    <div className="top_header">PREPARE BY TOPICS
                        <img className="image_01" src={cppImage} alt="" />
                    </div>
                    <div className="header_1">C++</div>
                    <button className="continue_preparation"><a href="a">Start Preparation</a></button>
                </div>
                <div className="right_section_02">
                    <div className="top_header">PREPARE BY TOPICS
                        <img className="image_01" src={pythonImage} alt="" />
                    </div>
                    <div className="header_1">PYTHON</div>
                    <button className="continue_preparation"><a href="a">Start Preparation</a></button>
                </div>
            </section>
            <section className="second_section">
                <div className="left_section_02">
                    <div className="top_header">PREPARE BY TOPICS
                        <img className="image_01" src={javaImage} alt="" />
                    </div>
                    <div className="header_1">JAVA</div>
                    <button className="continue_preparation"><a href="a">Start Preparation</a></button>
                </div>
                <div className="right_section_02">
                    <div className="top_header">PREPARE BY TOPICS
                        <img className="image_01" src={jsImage} alt="" />
                    </div>
                    <div className="header_1">JAVA SCRIPT</div>
                    <button className="continue_preparation"><a href="a">Start Preparation</a></button>
                </div>
            </section>
        </>
    )
}