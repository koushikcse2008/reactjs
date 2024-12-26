import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import  { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import FormikIssueForm from '../common/FormikIssueForm';

const AddIssue = () => {

    let navigate = useNavigate();

    const initialValues = {
        desc: "",
        severity: "",
        status: ""
    };

    const validationSchema = Yup.object({
        desc: Yup.string().required("Desc required").min(1,"Minimum 1 character needed"),
        severity: Yup.string().required("Severity required"),
        status: Yup.string().required("Must select status")
    });
   
        return (
            <>
            <div className="container">
            <h2 className='text-center fw-bold'>Add Issue</h2>
            <hr className=' mb-5' />
                <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={(values, {resetForm}) => {
                    console.log("Form data", values);
                    values.id = Math.ceil(Math.random() * 100).toString();
                    values.created_at = new Date().toJSON().slice(0, 10);
                    axios.post("http://localhost:4000/issues", values);  
                    resetForm();
                    toast.success("Successfully added.");
                    setTimeout(() => {
                        return navigate('/issues');  
                    }, 6000);
                }}
                component={FormikIssueForm}
                >                
                </Formik> 
                <ToastContainer />
            </div>
            </>
        );
    
}

export default AddIssue;
