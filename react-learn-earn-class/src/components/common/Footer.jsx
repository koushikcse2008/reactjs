import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

import DataService from '../../service/DataService';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      newsletter: {
        id: Math.ceil(Math.random() * 100),
        email: '',
        added_on: ''
      }
    };
    this.inputsNewsletter = this.inputsNewsletter.bind(this);
    this.handleNewsletter = this.handleNewsletter.bind(this);
  }

  componentDidMount() {
    DataService.getFooter()
         .then((response) => {
          this.setState({data: response.data});
          // console.log(response.data);
    });
  }

  inputsNewsletter = (e) => {
    this.setNewsetStatesletter((inputField) => ({
        ...inputField,
        [e.target.name]: e.target.value,
    }));
  }

  handleNewsletter = () => {
    const {id, email} = this.newsletter;        
      // const added_on = Date("Y-m-d");
      let yourDate = new Date();
      const added_on = yourDate.toISOString().split('T')[0];

      if(email === "") 
      {
        toast.error("Please enter email id.");
      }
      else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        toast.error("Please enter correct email id.");
      } 
      else if(email !== "") {
        DataService.createNewsletter({
            id, email, added_on
        });
        this.setNewsletter({
          email: ''
        });

        toast.success("Newsletter successfully added.");

      } 
  }

  render() {
  return (
    <>
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>Learn & Earn</h3>
              <p>{this.state.data.footer_text}</p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About us</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/terms-services">Terms of service</NavLink></li>
                <li><NavLink to="/privacy-policy">Privacy policy</NavLink></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              {/* <p>{data.address}</p> */}
              <p dangerouslySetInnerHTML={{  __html: this.state.data.address  }}></p>
              <p>                
                <strong>Phone:</strong> {this.state.data.phone}<br />
                <strong>Email:</strong> {this.state.data.email}<br />
              </p>

              <div className="social-links">
                <a href={this.state.data.twitter} className="twitter" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                <a href={this.state.data.facebook} className="facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                <a href={this.state.data.instagram} className="instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                <a href={this.state.data.linkedin} className="linkedin" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p dangerouslySetInnerHTML={{  __html: this.state.data.news_text  }}></p>
              <form action="" method="post">
                <input type="email" name="email" id="email"  onChange={this.inputsNewsletter} />
                <input type="button" onClick={this.handleNewsletter} value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Learn & Earn</span></strong>. All Rights Reserved
        </div>
        <div className="credits">          
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>

    <a href="!#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    <ToastContainer />
    </>
  ); 
}
}

export default Footer;