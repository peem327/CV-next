import React, { Component } from 'react';
import Layout from "../components/Layout";
// import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";



class Contact extends Component {

   
    render() {
       
        return (
            <div>
                <Layout title="Contact">
                    <div className=" bg-header jumbotron jumbotron-fluid  ">
                        <div className="container wheat">
                            <div className="row">
                                <div className="col-auto">
                                    {/* <p className="lead wheat mt-5">#</p> */}
                                    <h1 className="display-4 wheat mb-5">Contact </h1>
                                </div>
                            </div>
                        </div>
                    </div>
           
                    <section className="page-section" id="contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mt-5">
                                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required"
                                                        data-validation-required-message="Please enter your name." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required"
                                                        data-validation-required-message="Please enter your email address." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required"
                                                        data-validation-required-message="Please enter your phone number." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required"
                                                        data-validation-required-message="Please enter a message."></textarea>
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="col-lg-12 text-center mb-5">
                                                <div id="success"></div>
                                                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section> 
                </Layout>
            </div>
        );
    }
}

export default Contact;




        //     <div className="container">
        //     <section className="page-section" id="contact">
        //         <MDBCard>
        //             <MDBRow>
        //                 <MDBCol lg="8">
        //                     <MDBCardBody className="form">
        //                         <h3 className="mt-4">
        //                             <MDBIcon icon="envelope" className="pr-2" />
        //                         Write to me:
        //                     </h3>
        //                         <MDBRow>
        //                             <MDBCol md="6">
        //                                 <div className="md-form mb-0">
        //                                     <MDBInput
        //                                         type="text"
        //                                         id="form-contact-name"
        //                                         label="Your name"
        //                                     />
        //                                 </div>
        //                             </MDBCol>
        //                             <MDBCol md="6">
        //                                 <div className="md-form mb-0">
        //                                     <MDBInput
        //                                         type="text"
        //                                         id="form-contact-email"
        //                                         label="Your email"
        //                                     />
        //                                 </div>
        //                             </MDBCol>
        //                         </MDBRow>
        //                         <MDBRow>
        //                             <MDBCol md="6">
        //                                 <div className="md-form mb-0">
        //                                     <MDBInput
        //                                         type="text"
        //                                         id="form-contact-phone"
        //                                         label="Your phone"
        //                                     />
        //                                 </div>
        //                             </MDBCol>
        //                             <MDBCol md="6">
        //                                 <div className="md-form mb-0">
        //                                     <MDBInput
        //                                         type="text"
        //                                         id="form-contact-company"
        //                                         label="Your company"
        //                                     />
        //                                 </div>
        //                             </MDBCol>
        //                         </MDBRow>
        //                         <MDBRow>
        //                             <MDBCol md="12">
        //                                 <div className="md-form mb-0">
        //                                     <MDBInput
        //                                         type="textarea"
        //                                         id="form-contact-message"
        //                                         label="Your message"
        //                                     />
        //                                     <MDBBtn rounded color="blue">
        //                                         <MDBIcon icon="paper-plane" />
        //                                     </MDBBtn>
        //                                 </div>
        //                             </MDBCol>
        //                         </MDBRow>
        //                     </MDBCardBody>
        //                 </MDBCol>
        //                 <MDBCol lg="4">
        //                     <MDBCardBody className="contact text-center h-100 white-text">
        //                         <h3 className="my-4 pb-2">Contact information</h3>
        //                         <ul className="text-lg-left list-unstyled ml-4">
        //                             <li>
        //                                 <p>
        //                                     <MDBIcon icon="map-marker-alt" className="pr-2" />
        //             New York, 94126 USA
        //         </p>
        //                             </li>
        //                             <li>
        //                                 <p>
        //                                     <MDBIcon icon="phone" className="pr-2" />+ 01 234 567 89
        //         </p>
        //                             </li>
        //                             <li>
        //                                 <p>
        //                                     <MDBIcon icon="envelope" className="pr-2" />
        //             contact@example.com
        //         </p>
        //                             </li>
        //                         </ul>
        //                         <hr className="hr-light my-4" />
        //                         <ul className="list-inline text-center list-unstyled">
        //                             <li className="list-inline-item">
        //                                 <a href="#!" className="p-2 fa-lg w-ic">
        //                                     <MDBIcon fab icon="twitter" />
        //                                 </a>
        //                             </li>
        //                             <li className="list-inline-item">
        //                                 <a href="#!" className="p-2 fa-lg w-ic">
        //                                     <MDBIcon fab icon="linkedin-in" />
        //                                 </a>
        //                             </li>
        //                             <li className="list-inline-item">
        //                                 <a href="#!" className="p-2 fa-lg w-ic">
        //                                     <MDBIcon fab icon="instagram" />
        //                                 </a>
        //                             </li>
        //                         </ul>
        //                     </MDBCardBody>
        //                 </MDBCol>
        //             </MDBRow>
        //         </MDBCard>
        //     </section>
        // </div>