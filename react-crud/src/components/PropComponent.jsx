import React from 'react';

const PropComponent = (props) => {

    //const {name, address, email, phone} = props.obje; 

    const objArray = (
        <div>
        { props.obje.map((item1) => 
        <p>Name: {item1.name} Address: {item1.address} Email: {item1.email} Phone: {item1.phone} </p>
        )}   
    </div>     
    );

    const objArray1 = ( 
        <ul>
            { props.obje.map((contact) =>  
            <li>{contact.name} {contact.address}</li>
            )}        
        </ul>
        );

    return (
        <div>
            <h1>Prop Component</h1>
            {/* <p>Name: {name}, Address: {address} Email: {email}, Phone: {phone} </p> */}
            {objArray}
            {objArray1}
        </div>
    );
}

export default PropComponent;
