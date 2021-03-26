import React from "react";
import "./contact.css";
import "font-awesome/css/font-awesome.min.css";
import { NavigationBar } from "./NavigationBar";
import emailjs from "emailjs-com";

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
}

export default function IncommingRounds(props: { location: { state: IForm } }) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i5xkb9q",
        "template_oswchzf",
        e.target,
        "user_g4abNbCtzFbXRaay1AgZK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <NavigationBar navigationState={false} />
      <div className="margins">
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
                            placeholder="Write Your Message"
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
      </div>
    </>
  );
}