import { Component } from 'react';
import axios from 'axios'

class AddIssue extends Component {

    state = {
        formdata: {
            id: Math.ceil(Math.random() * 100),
            desc: '',
            severity: '',
            status: '',
            created_at: new Date().toJSON().slice(0, 10)
        }
    }

    inputsHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
            formdata: { ...this.state.formdata, [name]: value },
        });
    };

    // const inputsHandler = (e) => {
    //     setFormData((inputField) => ({
    //         ...inputField,
    //         [e.target.name]: e.target.value,
    //     }));
    // }

    handleSubmit = () => {
        console.log(this.state.formdata);
        axios.post("http://localhost:4000/issues", this.state.formdata);       
    };

    render() {
        return (
            <>
              <h2>Add issue</h2>                                 
                {this.message}
                                
                <form>
                    <div className="row">
                        <div className="form-group col-lg-6 mb-4">
                            <label className='fw-bold'>Description</label>
                            <textarea className="form-control" name="desc" id="desc" onChange={this.inputsHandler}  aria-describedby="nameHelp" style={{ resize: "none" }}></textarea>
                        </div>    
                        <div className="form-group col-lg-6 mb-4">
                            <label className='fw-bold'>Severity</label>
                            <select className="form-select" name="severity" id="severity" onChange={this.inputsHandler} aria-describedby="severityHelp">
                                <option value="">Select</option>
                                <option value="critical">Critical</option>
                                <option value="major">Major</option>
                                <option value="minor">Minor</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6 mb-4">
                        <label className='fw-bold'>Status</label>
                            <select className="form-select" name="status" id="status" onChange={this.inputsHandler}>
                                <option value="">Select</option>
                                <option value="open">Open</option>
                                <option value="closed">Closed</option>
                                <option value="in-progress">In Progress</option>
                            </select>
                        </div>
                        <div className="form-group col-lg-6 mt-4 mb-4">
                            <button type="button" onClick={() => this.handleSubmit()} className="btn btn-primary mb-4">Submit</button>
                        </div>
                    </div>
                </form>  
            </>
        );
    }
}

export default AddIssue;
