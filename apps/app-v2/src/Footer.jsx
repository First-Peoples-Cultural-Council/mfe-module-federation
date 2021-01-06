import React from 'react';
function Footer({className, children}) {
    return (
    <footer className={`Footer ${className}`}>
      <ul className="Footer__nav">
        <li className="Footer__navLinks">FAQ</li>
        <li className="Footer__navLinks">Terms of Service</li>
        <li className="Footer__navLinks">{children}</li>
      </ul>
    </footer>
    );
  }
  Footer.defaultProps = {
    className: ''
  }
  
  export default Footer;
  