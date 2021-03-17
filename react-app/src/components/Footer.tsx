import React from "react";
import { Col, Row } from "react-bootstrap";
import './footer.css';


const Footer = () => {
    return (
        <footer className="text-center text-black main-footer ">
            <div className="text-center p-3">
                © 2020 Copyright:
          <a href="#top">iProfiler.com</a>
            </div>
        </footer>
    );
}

export default Footer;