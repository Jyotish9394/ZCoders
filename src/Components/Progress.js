import React from 'react';
import cppImage from './Images/pngwing.com.png';
import pythonImage from './Images/python.com.png';
import javaImage from './Images/java.com.png';
import jsImage from './Images/js.png';


export default function Navbar(props) {
    return (
        <>
            
            <section className="second_section">
                <div className="left_section_02">
                    <div>Question:</div>
                    <button className="continue_preparation"><a href="a">See More</a></button>
                </div>
                <div className="right_section_02">
                    <div>Answer:</div>
                    <button className="continue_preparation"><a href="a">See More</a></button>
                </div>
            </section>
            
        </>
    )
}