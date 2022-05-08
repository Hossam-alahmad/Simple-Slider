import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import data from "./data";

import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
const Sliders = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index > data.length - 1) {
            setIndex(0);
        }
        if (index < 0) {
            setIndex(data.length - 1);
        }
    }, [index]);

    useEffect(() => {
        let clear = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => {
            clearInterval(clear);
        };
    }, [index]);
    return (
        <div className="slider-box ">
            <h1 className="title mb-4 text-success">Slider App</h1>
            <div className="slider-content position-relative d-flex p-4 m-auto">
                {people.map((item, itemIndex) => {
                    let position = "next-slide";
                    if (index === itemIndex) {
                        position = "active-slide";
                    }
                    if (
                        index - 1 === itemIndex ||
                        (index === 0 && itemIndex === data.length - 1)
                    ) {
                        position = "last-slide";
                    }
                    return (
                        <Slider key={item.id} {...item} position={position} />
                    );
                })}
                <button
                    className="btn text-success prev end-0"
                    onClick={() => setIndex(index => index - 1)}
                >
                    <FaChevronCircleLeft />
                </button>
                <button
                    className="btn text-success next start-0"
                    onClick={() => setIndex(index => index + 1)}
                >
                    <FaChevronCircleRight />
                </button>
            </div>
        </div>
    );
};

export default Sliders;
