import React from 'react';
import { Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'

const FormikIssueForm = ({ values, errors, touched, isValid, dirty }) => {

  return (
    <>
        <Form>                                           

            <div className="row">
                <div className="form-group col-lg-2 mb-4">
                    <label className='fw-bold'>Description</label>
                </div>    
                <div className="form-group col-lg-6 mb-4">
                <Field as="textarea"  name="desc" id="desc" style={{ resize: "none", height: "150px" }} className="form-control" />
                <ErrorMessage name="desc" component="div" className="error" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-2 mb-4"><label className='fw-bold'>Severity</label></div>    
                <div className="form-group col-lg-6 mb-4">
                    <Field as="select" className="form-select" name="severity" id="severity">
                        <option value="">Select</option>
                        <option value="critical">Critical</option>
                        <option value="major">Major</option>
                        <option value="minor">Minor</option>
                    </Field>
                    <ErrorMessage name="severity" component="div" className="error" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-2 mb-4"><label className='fw-bold'>Status</label></div>    
                <div className="form-group col-lg-6 mb-4">
                    <div role="group" aria-labelledby="my-radio-group" style={{ textAlign: 'left' }}>
                        <label style={{ marginRight: '10px' }}><Field type="radio" name="status" value="open" /> Open </label>
                        <label style={{ marginRight: '10px' }}><Field type="radio" name="status" value="closed" className='p-2' /> Closed </label>
                        <label><Field type="radio" name="status" value="in-progress" /> In Progress </label>
                    </div>
                    <ErrorMessage name="status" component="div" className="error" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-2 mb-4"> &nbsp; </div>
                <div className="form-group col-lg-6 mt-4 mb-4">
                <button type="submit" className='btn btn-success'> Submit </button>
                </div>
            </div>            
        </Form>
    </>
  )
}

export default FormikIssueForm