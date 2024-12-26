import React from 'react'

const About = () => {
  return (
    <>
      <h2 className="text-center fw-bold">About this app</h2>
      <hr className='mb-2' />
      <div className="container pt-4">
          <p className='mt-2 fs-4 fw-bold'>It uses below core options:</p>          
          <ul className="list-group mb-2" style={{ width: '100%', textAlign: 'left' }}>
            <li className="list-group-item list-group-item-danger"> #1. React hooks like useState(). useEffect(). </li>
            <li className="list-group-item list-group-item-danger"> #2. Uses react-router-dom routes for multiple pages navigation.</li>
            <li className="list-group-item list-group-item-danger"> #3. Implemented multiple small parent child components.</li>
          </ul>  
          <hr className='mt-5' />
          <p className='fs-4 fw-bold'>It uses below packages:</p>          
          <ul className="list-group" style={{ width: '100%', textAlign: 'left' }}>
            <li className="list-group-item list-group-item-danger"> #1. bootstrap for ui building. </li>
            <li className="list-group-item list-group-item-danger"> #2. react-toastify to notify the user actions.</li>
            <li className="list-group-item list-group-item-danger"> #3. react-spinners for loading contents.</li>
            <li className="list-group-item list-group-item-danger"> #4. formik and yup for form and validation.</li>
            <li className="list-group-item list-group-item-danger"> #5. concurrently for multiple command run using a single cli command.</li>
          </ul>    
      </div>
      <p>&nbsp;</p>
    </>
  )
}

export default About
