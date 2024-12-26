import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios'
import config from '../../config/config'

const IssueDetails = () => {
    const params = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        axios
        .get(config.jsonServer+"/"+params.id)
        .then((result) => {
            setDetails(result.data);
            console.log(result.data);
        });
    }, [1000]);

  return (
    <>
    <div className="container textLeft">
    <h2 className='text-left fs-1 mb-4'>Issue Details </h2>
        <div className="row">
            <div className="form-group col-lg-2 mb-4"><label className='fw-bold'>Id</label></div>    
            <div className="form-group col-lg-6 mb-4">{ details.id }</div>
        </div>
        <div className="row">
            <div className="form-group col-lg-2 mb-4"><label className='fw-bold'>Description</label></div>    
            <div className="form-group col-lg-6 mb-4">{ details.desc }</div>
        </div>
        <div className="row">
            <div className="form-group col-lg-2 mb-4"><label className='fw-bold'>Severity</label></div>    
            <div className="form-group col-lg-6 mb-4">{ details.severity }</div>
        </div>
        <div className="row">
            <div className="form-group col-lg-2 mb-4"><label className='fw-bold'>Status</label></div>    
            <div className="form-group col-lg-6 mb-4">{ details.status }</div>
        </div>
        <div className="row">
            <div className="form-group col-lg-2 mb-4"> <NavLink to='/issues' className='fs-6 text-danger fw-bold'>Back</NavLink> </div>
            <div className="form-group col-lg-6 mt-4 mb-4">&nbsp;</div>
        </div>
    </div>     
    </>
  )
}

export default IssueDetails
