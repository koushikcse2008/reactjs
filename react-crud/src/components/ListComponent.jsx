import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import DataService from '../services/DataService';

const ListComponent = () => {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        DataService.getAll()
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const getData = () => {
        DataService.getAll()
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const handleDelete = (delId) => {
        console.log(delId);
        //axios.delete(`http://localhost:3000/users/${delId}`);
       
        DataService.delete(delId)
        .then(() => {
            getData();
        });        

    };

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-2">&nbsp;</div>
            <div className="col-lg-8">
                <h1>List Component</h1> <hr />
                {APIData.map((data) => {             
                    return (<p>
                        <h3>User Details: </h3>
                        Name: {data.user_name}< br />
                        Address: {data.user_address}< br />
                        Email: {data.user_email}< br />
                        Mobile: {data.user_mobile}
                        < hr />                        
                        <Link className="btn btn-warning mr-2" to={`/edit/${data.id}`}>Update</Link>
                        <button onClick={() => handleDelete(data.id)} className="btn btn-danger">Delete</button>
                        </p>);
                })}
            </div>
            <div className="col-lg-2">&nbsp;</div>
        </div>
        
    </div>
    
    </>
  )
}

export default ListComponent;