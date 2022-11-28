import React, { useContext } from 'react';
import noteContext from '../components/core/contexthook/UseContext';

const UseContextPage = () => {
    const result = useContext(noteContext);

  return (
    <div>
        <h3>Use Context</h3> 
        <hr />
        <strong>Name:</strong> {result.name} <br /> 
        <strong>Email:</strong>  {result.email} <br /> 
        <strong>Address:</strong> {result.address}
    </div>
  )
}

export default UseContextPage;