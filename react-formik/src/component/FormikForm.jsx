import React from "react";

import { Form, Field } from "formik";

function FormikForm({ errors, touched, isValid, dirty }) {
  // console.log(errors);
  return (
    <Form>
        <div className="row">
      <div className="form-group col-lg-6">
        <label className="col-form-label">Name :</label>
        <Field
          name="username"
          className={
            touched.username
              ? `form-control ${errors.username ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.username && errors.username && (
          <small className="text-danger">{errors.username}</small>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="col-form-label">Age :</label>
        <Field
          name="age"
          className={
            touched.age
              ? `form-control ${errors.age ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.age && errors.age && (
          <small className="text-danger">{errors.age}</small>
        )}
      </div>
      </div>
      <div className="row">
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
      <div className="form-group col-lg-6">
        <label className="col-form-label">Phone :</label>
        <Field
          name="phone"
          className={
            touched.phone
              ? `form-control ${errors.phone ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.phone && errors.phone && (
          <small className="text-danger">{errors.phone}</small>
        )}
      </div>
      </div>
      <div className="row">
      <div className="form-group col-lg-6">
        <label className="col-form-label">City :</label>
        <Field
          name="city"
          className={
            touched.city
              ? `form-control ${errors.city ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.city && errors.city && (
          <small className="text-danger">{errors.city}</small>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="col-form-label">State :</label>
        <Field
          name="state"
          className={
            touched.state
              ? `form-control ${errors.state ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.state && errors.state && (
          <small className="text-danger">{errors.state}</small>
        )}
      </div>
      </div>
      <div className="row">
      <div className="form-group col-lg-6">
        <label className="col-form-label">Country :</label>
        <Field
          name="country"
          className={
            touched.country
              ? `form-control ${errors.country ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.country && errors.country && (
          <small className="text-danger">{errors.country}</small>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="col-form-label">Message :</label>
        <Field
          as="textarea"
          name="message"
          className={
            touched.message
              ? `form-control ${errors.message ? "invalid" : "valid"}`
              : `form-control`
          }
        ></Field>
        {touched.message && errors.message && (
          <small className="text-danger">{errors.message}</small>
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
    </Form>
  );
}

export default FormikForm;