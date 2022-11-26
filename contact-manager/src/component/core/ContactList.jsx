import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import DataService from '../../service/DataService';
import Spinner from '../common/Spinner';

import Swal from 'sweetalert2';

import { ToastContainer } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

const ContactList = () => {

    const [contacts, setContacts] = useState([]);
    const [spinner, setSpinner] = useState(true);

    // const capitalizeFirst = (str) => {
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // };

    const getData = () => {
        DataService.getAll()
                .then((response) => {
                    setContacts(response.data);
                    setSpinner(false);
                });
    }

    useEffect(() => {       
        getData();       
    }, []);

    

    const contactList = contacts.map((contact, index) => { 
        // const userName = contact.name;
        // const upperName = userName.charAt(0).toUpperCase() + userName.slice(1)
        return (
            <>
            <tr key={contact.id}>
                <th scope="row" className="text-center">{index+1}</th>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.address}</td>
                <td>{contact.landline}</td>
                <td>{contact.mobile}</td>
                <td colSpan="3">
                    <Link to={`/show-contact/${contact.id}`} className="btn btn-outline-success mr-2">View</Link>
                    <Link to={`/edit-contact/${contact.id}`} className="btn btn-outline-warning mr-2">Edit</Link>
                    <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(contact.id)}>Delete</button>
                </td>
            </tr>      
            </>
        );
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                DataService.delete(id).then(() => {
                    getData();
                });

              Swal.fire(
                'Deleted!',
                'Your contact has been deleted.',
                'success'
              );
              
            }
          })

        // toast.error("Successfully deleted.");
    };

    return (
    <>
    <h3>Contact List</h3>
    <hr />
    
    { spinner ? <Spinner /> : null }
    { contacts.length > 0 &&
    <table className="table table-bordered">
    <thead className="bg-success text-white">
        <tr>
        <th scope="col">#Sl.</th>
        <th scope="col">Name</th>
        <th scope="col">Email id</th>
        <th scope="col">Address</th>
        <th scope="col">Landline</th>
        <th scope="col">Mobile</th>
        <th scope="col" colSpan="3">Actions</th>
        </tr>
    </thead>
    <tbody className="bg-light">
        {contactList}
    </tbody>
    </table>
    }
    <ToastContainer />
    </>
  )
}

export default ContactList;