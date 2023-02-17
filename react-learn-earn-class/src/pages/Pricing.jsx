import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DataService from "../service/DataService";

class Pricing extends Component {
  constructor() {
    super();
    this.state = {
      price: [],
      faq: [],
    };
  }

  componentDidMount() {
    DataService.getPricing().then((response) => {
      this.setState({
        price: response.data[0].price,
        faq: response.data[0].faq,
      });
    });
  }

  render() {
    return (
      <>
        <main id="main">
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="breadcrumb-hero">
              <div className="container">
                <div className="breadcrumb-hero">
                  <h2>Pricing</h2>
                </div>
              </div>
            </div>
            <div className="container">
              <ol>
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>Pricing</li>
              </ol>
            </div>
          </section>

          <section id="pricing" className="pricing">
            <div className="container">
              <div className="row">
                {this.state.price.map((data) => (
                  <>
                    <div
                      className={`col-lg-3 col-md-6 ${
                        data.id === 2 ? "mt-4 mt-md-0" : ""
                      } ${data.id === 3 ? "mt-4 mt-lg-0" : ""} ${
                        data.id == 4 ? "mt-4 mt-lg-0" : ""
                      }`}
                    >
                      <div
                        className={`box ${data.id === 2 ? "featured" : ""}`}
                        data-aos="fade-up"
                      >
                        {data.id === 4 && (
                          <span className="advanced">Advanced</span>
                        )}
                        <h3>{data.name}</h3>
                        <h4>
                          <sup>$</sup>
                          {data.price}
                          <span> / month</span>
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{ __html: data.details }}
                        ></div>
                        <div className="btn-wrap">
                          <a href={data.btn_link} className="btn-buy">
                            {data.btn_label}
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="faq section-bg">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Frequently Asked Questions</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              {this.state.faq.map((data) => (
                <div
                  className="row faq-item d-flex align-items-stretch"
                  data-aos="fade-up"
                >
                  <div className="col-lg-5">
                    <i className="bx bx-help-circle"></i>
                    <h4>{data.name}</h4>
                  </div>
                  <div className="col-lg-7">
                    <p>{data.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Pricing;
