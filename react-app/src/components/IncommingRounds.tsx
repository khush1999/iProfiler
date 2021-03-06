import axios from "axios";
import emailjs from "emailjs-com";
import "font-awesome/css/font-awesome.min.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./contact.css";
import { MailsModal } from "./MailsModal";

/* Structure for Applicants Data */
interface IForm {
  email: string;
  phone1: string;
  phone2: string;
  fname: string;
  lname: string;
  total_exp: number;
  designition: string;
  pgDegree: string;
  ugDegree: string;
  pg_University: string;
  ug_University: string;
  ugPercentage: string;
  pgPercentage: string;
  skills1: string;
  skills2: string;
  skills3: string;
  Companies_worked_at: string;
  address: string;
  dob: string;
  city: string;
  state: string;
  zip: string;
  resume_id: string;
  status: string;
}

/* This component allows HR to send invitation to applicant for further process */
export default function IncommingRounds(props: { location: { state: IForm } }) {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let email, sentMsg;

  /* Function for email service */
  function sendEmail(e) {
    e.preventDefault();
    email = props.location.state.email;
    emailjs
      .sendForm(
        "service_i5xkb9q",
        "template_oswchzf",
        e.target,
        "user_g4abNbCtzFbXRaay1AgZK"
      )
      .then(
        async (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            sentMsg = "Message Sent!!!!!!!!";
            setShow(true);
          }
          const res = await axios.get(`/create/` + email);
          console.log(res.data);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      {/* Modal for acknowledgement of email */}
      <MailsModal show={show}
        handleClose={handleClose}
        modalInput="Invitation has been sent successfully to the candidate !!" />

      <Link to="/DashboardPage">
        <i className="fa fa-chevron-circle-left back-icon" aria-hidden="true"
          onClick={() => history.push("/DashboardPage")}></i>
        <span className="back-span">Back to Dashboard</span>
      </Link>

      {/* Header */}
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>Intimate Candidate For further rounds!!!!</h2>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {sentMsg && <h2>{sentMsg}</h2>}

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
                          value={
                            props.location.state.fname +
                            " " +
                            props.location.state.lname
                          }
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="email"
                          placeholder="Enter the Candidate's E-mail ID"
                          name="email"
                          value={props.location.state.email}
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
                          value={props.location.state.phone1}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          value="Selection For Further Rounds"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea
                          placeholder="Mode of Interview, Date: dd/mm/yyyy, Venue: <Platform>"
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
