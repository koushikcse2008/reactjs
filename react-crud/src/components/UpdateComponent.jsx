import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateComponent = () => {

    const [formdata, setFormData] = useState({
        id: Math.ceil(Math.random() * 100),
        user_name: '',
        user_email: '',
        user_address: '',
        user_mobile: ''
    });

    const params = useParams();
    //console.log(params.id);

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${params.id}`)
            .then((response) => {
                setFormData(response.data);
            });
    }, []);

    

    

    const [message, setMessage] = useState('');

    const inputsHandler = (e) => {
        //setFormData( {[e.target.name]: e.target.value} )
        //const { name, value } = e.target;
        setFormData((inputField) => ({
            ...inputField,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = () => {
        console.log(formdata);
        const {id, user_name, user_email, user_address, user_mobile} = formdata;
        axios.put(`http://localhost:3000/users/${id}`, {
            id, user_name, user_address, user_email, user_mobile
        });
        setMessage(<div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you have successfully add update the user.</p>
        <hr />
        <p class="mb-0">Whenever you need to update a user, you can use this form to update new user.</p>
        </div>);
        setTimeout(() => {
            setMessage('');
        }, 10000);        
    };

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-2">&nbsp;</div>
            <div className="col-lg-8" style={{"textAlign": "left"}}>
                <h1>Form Component</h1>
                {/* <h2>Form Submitted Data</h2>
                <p>Name: {formdata.user_name}</p>
                <p>Email: {formdata.user_email}</p>
                <p>Address: {formdata.user_address}</p>
                <p>Mobile: {formdata.user_mobile}</p> */}
                                   
                {message}
                                
                <form>
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label>Name</label>
                            <input type="text" className="form-control" name="user_name" id="user_name" onChange={inputsHandler} value={formdata.user_name}   aria-describedby="nameHelp" />
                            <small id="nameHelp" className="form-text text-muted">Enter your name.</small>
                        </div>    
                        <div className="form-group col-lg-6">
                            <label >Email id</label>
                            <input type="email" className="form-control" name="user_email" id="user_email" onChange={inputsHandler} value={formdata.user_email} aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">Enter Email Id.</small>
                        </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-lg-6">
                        <label >Address</label>
                        <textarea className="form-control" name="user_address" id="user_address" aria-describedby="addressHelp" onChange={inputsHandler} value={formdata.user_address} style={{"resize":"none"}}></textarea>
                        <small id="addressHelp" className="form-text text-muted">Enter Address.</small>
                    </div>
                    <div className="form-group col-lg-6">
                        <label>Mobile No</label>
                        <input type="phone" className="form-control" name="user_mobile" id="user_mobile" onChange={inputsHandler} aria-describedby="mobileHelp" value={formdata.user_mobile} />
                        <small id="mobileHelp" className="form-text text-muted">Enter Mobile No.</small>
                    </div>
                    </div>
                    <button type="button" onClick={() => handleSubmit()} className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-lg-2">&nbsp;</div>
        </div>
    </div>
    </>
  )
}

export default UpdateComponent;