import React from 'react';
import '../assets/styles/Footer.css';

function Footer() {
    return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className='fa fa-angle-up fa-2x' aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-twitter fa-inverse fa-2x" />
          </a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/christopher-ponzio-408536227" target="_blank">
            <i className="fa fa-linkedin fa-inverse fa-2x" />
          </a>
          <a rel="noreferrer" href="https://github.com/ChristopherPonzio" target="_blank">
            <i className="fa fa-github fa-inverse fa-2x" />
          </a>
        </div>
      </div>
    </footer>
);
}

export default Footer;