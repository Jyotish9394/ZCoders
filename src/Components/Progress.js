import React from 'react';
import { useState, useEffect } from "react";

import axios from 'axios';


export default function Navbar(props) {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
    }, []);

    return (
        <>
            {isError !== "" && <h2>{isError}</h2>}


            {myData.slice(0, 9).map((post) => {
                const { problem, solution } = post;
                return (
                    <>
                        <section className="second_section">
                            <div className="left_section_02">
                                <div>Question:</div>
                                <div>{problem}</div>
                                <button className="continue_preparation"><a href="a">See More</a></button>
                            </div>
                            <div className="right_section_02">
                                <div>Answer:</div>
                                <div>{solution}</div>
                                <button className="continue_preparation"><a href="a">See More</a></button>
                            </div>
                        </section>
                    </>
                )
            })
            }




        </>
    )
}