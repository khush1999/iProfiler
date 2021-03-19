import React from 'react'
import './contact.css';
import 'font-awesome/css/font-awesome.min.css';
import { NavigationBar } from './NavigationBar';

export default function Contact() {
    return (
        <>
        <NavigationBar />
        <div className="margins">
            <section className="contact-page-sec">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <div className="contact-info">
                    <div className="contact-info-item">
                    <div className="contact-info-icon">
                        <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact-info-text">
                    <h2>address</h2>
                    <span>1215 Ring Road, iProfiler </span> 
                    <span>Banglore , INDIA</span> 
                </div>
                </div>            
            </div>          
            </div>          
            <div className="col-md-4">
            <div className="contact-info">
                <div className="contact-info-item">
                <div className="contact-info-icon">
                    <i className="fa fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                    <h2>E-mail us at </h2>
                    <span>info@iprofiler.com</span> 
                    <span>queries@iprofiler.com</span>
                </div>
                </div>            
            </div>                
            </div>                
            <div className="col-md-4">
            <div className="contact-info">
                <div className="contact-info-item">
                <div className="contact-info-icon">
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="contact-info-text">
                    <h2> Office working hours </h2>
                    <span> Mon - Thu  10:00 am - 7.00 pm</span>
                    <span> Fri - Sat  11.00 am - 5.00 pm</span>
                </div>
                </div>            
            </div>          
            </div>          
        </div>
        <div className="row">
            <div className="col-md-8">
            <div className="contact-page-form">
                <h2>Get in Touch</h2> 
                <form action="contact-mail.php" method="post">
                <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                    <input type="text" placeholder="Your Name" name="name"/>
                    </div>
                </div>  
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                    <input type="email" placeholder="E-mail" name="email" required/>
                    </div>
                </div>                              
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                    <input type="text" placeholder="Phone Number" name="phone"/>
                    </div>
                </div>  
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                    <input type="text" placeholder="Subject" name="subject"/>
                    </div>
                </div>                
                <div className="col-md-12 message-input">
                    <div className="single-input-field">
                    <textarea  placeholder="Write Your Message" name="message"></textarea>
                    </div>
                </div>                                                
                <div className="single-input-fieldsbtn">
                    <input type="submit" value="Send Now"/>
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
    )
}