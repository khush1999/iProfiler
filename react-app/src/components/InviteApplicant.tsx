import emailjs from "emailjs-com";
import "font-awesome/css/font-awesome.min.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./contact.css";
import { MailsModal } from "./MailsModal";
import { NavigationBar } from "./NavigationBar";

export default function InviteApplicant() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const history = useHistory();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i5xkb9q",
        "template_he26z9a",
        e.target,
        "user_g4abNbCtzFbXRaay1AgZK"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setShow(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <MailsModal show={show}
        handleClose={handleClose}
        modalInput="Invitation has been sent successfully to the candidate !!" />
      <Link to="/DashboardPage">
        <i className="fa fa-chevron-circle-left back-icon" aria-hidden="true"
          onClick={() => history.push("/DashboardPage")}></i>
        <span className="back-span">Back to Dashboard</span>
      </Link>
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-user-plus"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Send an invitation to the Candidate</h2>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form">
                <h2>Get in Touch</h2>
                <form onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Enter the Candidate's Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="email"
                          placeholder="Enter the Candidate's E-mail ID"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Enter the Candidate's Phone Number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea
                          placeholder="Mention the Job Role and related details"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send Invitation" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
