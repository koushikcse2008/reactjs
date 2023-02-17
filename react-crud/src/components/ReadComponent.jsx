import React, { useState, useEffect } from 'react'

const ReadComponent = () => {

    const [formdata, setFormData] = useState({
        id: Math.ceil(Math.random() * 100),
        user_name: '',
        user_email: '',
        user_address: '',
        user_mobile: ''
    });

    const inputHandler = (e) => {
        setFormData((inputData) => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));
    }
    
   

  return (
    <div>ReadComponent</div>
  )
}

export default ReadComponent