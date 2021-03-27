import React from "react";
import './footer.css';


const Footer = () => {
    return (
        <footer className="text-center text-white main-footer">
            <div className="text-center p-3">
                © 2021 Copyright: {" "}
          <a className="footer-text" href="#top"> iProfiler.com</a>
            </div>
        </footer>
    );
}

export default Footer;