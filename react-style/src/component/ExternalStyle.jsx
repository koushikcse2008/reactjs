import React from 'react';
import "./ExternalStyle.css";

const ExternalStyle = () => {
    return (
        <>
        <h2>Internal Style Option:</h2>
        <p className="color">Font color</p>
        <p className="background">Background color</p>
        <p className="font-size">Font Size</p>
        <p className="font-style">Font Style Italic</p>
        <hr />
        </>
    );
}

export default ExternalStyle;
