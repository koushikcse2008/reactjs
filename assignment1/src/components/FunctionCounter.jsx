import { useState } from 'react'

const FunctionCounter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

  return (
    <>
    <h3>Functional Component</h3> <br />
    <p>Counter: <span className='text-success'>{ count }</span></p>
    <button onClick={handleIncrement} className='btn btn-success me-2'>Increment Counter</button>
    <button onClick={handleDecrement} className='btn btn-danger'>Decrement Counter</button>
    </>
  )
}

export default FunctionCounter