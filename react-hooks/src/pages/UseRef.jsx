import React, { useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

const UseRef = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
      console.log(inputEl.current.value);
      toast.success(inputEl.current.value);
    };
    return (
      <>
        <h3>Use Refs</h3>
        <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
        <p>Enter input and click on the button:</p>
        <input ref={inputEl} type="text" className="form-control mr-2 mb-4" />
        <button onClick={onButtonClick} className="btn btn-success">Get the input value</button>
        <ToastContainer />
      </>
    );
  }

export default UseRef;