import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowContact = () => {
  const params = useParams();

  const [contact, setContact] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/contacts/${params.id}`)
         .then((response) => {
          setContact(response.data);
         });
  }, []);

  return (
    <>
    <h3>Contact Details:</h3>
    <hr />
    <ul className="list-group  mb-2 col-lg-12">
      <li className="list-group-item active" aria-current="true"><strong>Name:</strong> {contact.name}</li>
      <li className="list-group-item"><strong>Email Id:</strong> {contact.email}</li>
      <li className="list-group-item"><strong>Address:</strong> {contact.address}</li>
      <li className="list-group-item"><strong>Landline:</strong> {contact.landline}</li>
      <li className="list-group-item"><strong>Mobile:</strong> {contact.mobile}</li>
    </ul>
    
    <Link to="/contact-list" className="btn btn-danger">Back</Link>
    </>
  )
}

export default ShowContact;