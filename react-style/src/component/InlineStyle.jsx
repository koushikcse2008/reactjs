import React from 'react';
import logo from './logo192.png';


const InlineStyle = () => {
  return (
    <>
    <h2>Inline Style Options</h2>
    <p style={{"color": "green"}}>Font color</p>
    <p style={{"backgroundColor": "blue"}}>Background color</p>
    <p style={{"fontSize": "50px"}}>Font Size</p>
    <p style={{"fontStyle": "italic"}}>Font Style Italic</p>
    <p><img src={logo} alt="" /></p>
    <hr />
    </>
  )
}

export default InlineStyle