import React from 'react';
import { Formik } from "formik";
import FormikForm from "../component/common/FormikForm";
import * as Yup from "yup";
// import axios from 'axios';
import DataService from '../service/DataService';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {

  const navigate = useNavigate();

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
    <h3>Add Contact</h3>
    <hr />
    <Formik
            initialValues={{
              name: "",
              email: "",
              address: "",
              landline: "",
              mobile: "",
            }}
            onSubmit={(value, { resetForm }) => {
              //console.log(value);
              DataService.create(value);
              resetForm();
              toast.success("Successfully added.");
              setTimeout(() => {
                navigate("/contact-list");
              }, 6000);  
            }}
            validationSchema={ErrorSchema}
            component={FormikForm}
          />
          <ToastContainer />
    </>
  )
}

export default AddContact