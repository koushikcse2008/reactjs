import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/common/Spinner';
import { Link } from 'react-router-dom';

const UseEffect = () => {

    const [photos, setPhotos] = useState([]);
    const [spinner, setSpinner] = useState(true);

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    useEffect(() => {        
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=200').then((response) => {
            setPhotos(response.data);
            setSpinner(false);
        });        
    }, []);

    const photoList = photos.map((photo) => { 
        const upperTitle = capitalizeFirst(photo.title);
        return (
            <div className="card pt-0 m-2 card-list-data" style={{"width": "15.2rem"}}>
                <img src={photo.url} alt={photo.title} />
                <div className="card-body">
                    <h5 className="card-title">{upperTitle}</h5>
                    <Link to={`/use-effect-details/${photo.id}`} className="btn btn-primary">View Photo</Link>
                </div>
            </div>
        );
    });

    
    return (
        <>
        <h4>Fetch Content using axios</h4>
        <hr />
        <div className="row">
        { spinner ? <Spinner /> : null }   
        { photoList }
        </div>
        </>
    )
}

export default UseEffect;