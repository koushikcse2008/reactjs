import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from 'react-router-dom';
import config from '../../config/config'
import GridLoader from "react-spinners/GridLoader"
import FormikIssueForm from '../common/FormikIssueForm';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

const UpdateIssue = () => {

    let navigate = useNavigate();

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    const params = useParams();
    const id = parseInt(params.id, 10);

    const [details, setDetails] = useState({});
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {    
        let editData = {};    
        axios
        .get(config.jsonServer+"/"+id)
        .then((result) => {
            if(result.data && result.data) {
                editData = result.data;
            }
            setDetails(editData);
            setLoader(false);
        });
    }, []);

    const initialValues = {
        desc: details.desc,
        severity: details.severity,
        status: details.status
    };

    const validationSchema = Yup.object({
        desc: Yup.string().required("Desc required").min(1,"Minimum 1 character needed"),
        severity: Yup.string().required("Severity required"),
        status: Yup.string().required("Must select status")
    });
   
        return (
            <>   
            <div className="container">
            <h2 className='text-center fw-bold'>Update Issue</h2>
            <hr className=' mb-5' />         
                {loader == false && 
                    <Formik 
                    initialValues={initialValues} 
                    validationSchema={validationSchema} 
                    onSubmit={(values, {resetForm}) => {
                        axios
                        .put("http://localhost:4000/issues/" + params.id, values)
                        .then((res) => {
                            toast.success("Successfully updated.");
                            setTimeout(() => {
                                return navigate('/issues');  
                            }, 4000);
                        })
                        .catch((err) => console.log(err));  
                        resetForm();
                    }}
                    component={FormikIssueForm}
                    >                    
                    </Formik> 
                }

                {loader == true && 
                    <GridLoader 
                    color="#f00"
                    loading="true"
                    cssOverride={override}
                    size={15}
                    />
                }
                <p>&nbsp;</p>
                <ToastContainer />
            </div>
            </>
        );
}

export default UpdateIssue
