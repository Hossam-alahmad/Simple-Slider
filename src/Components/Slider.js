import React from "react";

const Slider = ({ name, image, title, quote, position }) => {
    return (
        <div
            className={`item p-4 w-100  ${position} position-absolute top-0 end-0`}
        >
            <div className="img-box m-auto mb-4">
                <img src={image} className="w-100 h-100" alt={image} />
            </div>
            <div className="content">
                <h2 className="name text-success">{name}</h2>
                <span className="title fw-bold mb-2 d-block">{title}</span>
                <p className="quote">{quote}</p>
            </div>
        </div>
    );
};

export default Slider;
