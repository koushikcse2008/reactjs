import React, {useState} from 'react';

const Hello = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 2);
    }

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

  return (
      <>
      <div>Count value: {count}</div>
      <button onClick={handleIncrement} className='btn btn-success' style={{marginBottom: '20px'}}>Increments</button><br />
      <button onClick={handleDecrement} className='btn btn-danger' style={{ float: 'right' }}>Decrements</button>
    </>
  )
}

export default Hello