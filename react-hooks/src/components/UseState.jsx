import React, { useState } from 'react';
// import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

const UseState = () => {
    const [counter, setCounter] = useState(0);    
    // const notify = () => toast("Wow so easy!");

    // const options = {
    //   autoClose: true,
    //   type: toast.TYPE.INFO,
    //   position: toast.POSITION.TOP_RIGHT,
    //   pauseOnHover: true,
    //   progress: 0.2
    // };

    // Swal.fire({
    //   title: 'Error!',
    //   text: 'You can not make negative values.',
    //   icon: 'error',
    //   // confirmButtonText: 'Cool'
    // });

    const handleIncrement = (inc) => {
      setCounter((prevState) => {
        toast.success("Incremented.");
        return prevState + inc;
      });
    } 

    const handleDecrement = (dec) => {
      setCounter((prevState) => {
        if((prevState === 0) && (dec === 1)){
          toast.error("Can not make negative values.");
          return prevState;
        }
        else if((prevState <= 4) && (dec === 5)){
          toast.error("Can not make negative values.");
          return prevState;
        }

        toast.warn("Decremented.");
        return prevState - dec;
      });
    

    }

  return (
    <>
    <h4>Counter Example</h4>
    <p>Counter value: {counter}</p>
    <p>
        <button onClick={() => handleIncrement(1)} className="btn btn-success mr-2">Increment by 1</button>
        <button onClick={() => handleDecrement(1)} className="btn btn-danger mr-2">Decrement by 1</button>
        <button onClick={() => handleIncrement(5)} className="btn btn-success mr-2">Increment by 5</button>
        <button onClick={() => handleDecrement(5)} className="btn btn-danger">Decrement by 5</button>
        <ToastContainer theme="colored" />
    </p>
    </>
  )
}

export default UseState;