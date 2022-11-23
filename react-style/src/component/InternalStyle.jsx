import React from 'react';
import logo from './logo192.png';

const InternalStyle = () => {

    const color = {
        "color": "blue"
    }

    const background = {
        "backgroundColor": "yellow"
    }

    const font_size = {
        "fontSize": "40px"
    }

    const font_style = {
        "fontStyle": "italic"
    }

  return (
    <>
    <h2>Internal Style Option:</h2>
    <p style={color}>Font color</p>
    <p style={background}>Background color</p>
    <p style={font_size}>Font Size</p>
    <p style={font_style}>Font Style Italic</p>
    <p><img src={logo} alt="" /></p>
    <hr />
    </>
  )
}

export default InternalStyle;