import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import FormikForm from "../component/common/FormikForm";
import * as Yup from "yup";
// import axios from 'axios';
import DataService from '../service/DataService';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import Spinner from '../component/common/Spinner';


const EditContact = () => {

  const params = useParams();
  const [contact, setContact] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    DataService.get(params.id)
         .then((response) => {
          setContact(response.data);
          setSpinner(false);
         });
  }, [contact]);

  const ErrorSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Too Short")
      .max(12, "Too Long"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Address is required"),
    landline: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Not a Phone number"
      )
      .required("Landline required"),
    mobile: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Not a Phone number"
      )
      .required("Mobile required"),    
  });

  return (
    <>
    <h3>Update Contact {contact.name} </h3>
    <hr />
    { spinner ? <Spinner /> : null }
    { contact.name &&
      <>      
          <Formik
            initialValues={{
              id: contact.id,
              name: contact.name,
              email: contact.email,
              address: contact.address,
              landline: contact.landline,
              mobile: contact.mobile,
            }}
            onSubmit={(data, { resetForm }) => {
              DataService.update(params.id, data);
              //resetForm();
              toast.success("Successfully updated.");
              setTimeout(() => {
                navigate("/contact-list");
              }, 6000);              
            }}
            validationSchema={ErrorSchema}
            component={FormikForm}
          />
           
          <ToastContainer />
          </>
  }
    </>
  )
}

export default EditContact