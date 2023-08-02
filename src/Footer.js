import React from 'react';
import './Footer.css'; 
import { Briefcase, Compass, Bell, Settings } from 'react-feather';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <Briefcase />
        <Compass />
        <Bell />
        <Settings />
      </div>
    </div>
  );
};

export default Footer;
