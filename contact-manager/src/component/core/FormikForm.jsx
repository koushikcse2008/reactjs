import React from "react";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";


const FormikForm = ({ values, errors, touched, isValid, dirty })  => {

  //     values,
  //     errors,
  //     touched,
  //     status,
  //     dirty,
  //     handleChange,
  //     handleBlur,
  //     handleSubmit,
  //     isSubmitting,
  //     isValid,
  //     handleReset,
  //     setTouched


  // console.log(errors);
  return (
    <Form>
        <div className="row">
      <div className="form-group col-lg-6">
        <label className="col-form-label">Name :</label>
        <Field
          name="name"
          className={
            touched.name
              ? `form-control ${errors.name ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
          value={values.name}
        />
        {touched.name && errors.name && (
          <small className="text-danger">{errors.name}</small>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="col-form-label">Email :</label>
        <Field
          name="email"
          className={
            touched.email
              ? `form-control ${errors.email ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.email && errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}
      </div>
      </div>
      <div className="row">
      <div className="form-group col-lg-12">
        <label className="col-form-label">Address :</label>
        <Field
          as="textarea"
          name="address"
          className={
            touched.address
              ? `form-control ${errors.address ? "invalid" : "valid"}`
              : `form-control`
          }
        ></Field>
        {touched.address && errors.address && (
          <small className="text-danger">{errors.address}</small>
        )}
      </div>
      
      </div>
      <div className="row">
      <div className="form-group col-lg-6">
        <label className="col-form-label">Landline :</label>
        <Field
          name="landline"
          className={
            touched.landline
              ? `form-control ${errors.landline ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.landline && errors.landline && (
          <small className="text-danger">{errors.landline}</small>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="col-form-label">Mobile :</label>
        <Field
          name="mobile"
          className={
            touched.mobile
              ? `form-control ${errors.mobile ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.mobile && errors.mobile && (
          <small className="text-danger">{errors.mobile}</small>
        )}
      </div>      
      </div>
      
      <button
        type="submit"
        className="btn btn-primary my-3"
        disabled={!isValid || !dirty}
      >
        Submit
      </button>
      <Link
        to="/contact-list"
        className="btn btn-danger ml-3"
      >
        Back
      </Link>
    </Form>
  );
}

export default FormikForm;