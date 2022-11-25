import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { Link, useParams } from 'react-router-dom';

const UseEffectDetails = () => {

    const [photos, setPhotos] = useState([]);
    const [spinner, setSpinner] = useState(true);

    // const capitalizeFirst = str => {
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // };

    const params = useParams();
    useEffect(() => {        
        axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
             .then((response) => {
                setPhotos(response.data);
                console.log(response.data)
                setSpinner(false);
            });        
    }, [photos]);

    // setPhotos(...photos, capitalizeFirst(photos.title));

    return (
        <>
        <h4>Fetch Content using axios</h4>
        <hr />
        <div className="row">
        { spinner ? <Spinner /> : null }   
        <div className="card pt-0 m-2" style={{"width": "21.8rem"}}>
                <img src={photos.url} alt={photos.title} />
                <div className="card-body">
                    <h5 className="card-title">{photos.title}</h5>
                </div>
                </div>
        </div>
                    <Link to="/use-effect" className="btn btn-danger">Back to list</Link>
        
        </>
    )
}

export default UseEffectDetails;