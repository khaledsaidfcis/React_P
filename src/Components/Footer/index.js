import React from 'react';
import { FooterSection, FooterDesc } from './style.js';
const Footer = () => {
  return (
    <FooterSection>
      <FooterDesc>
        {' '}
        copyright &copy; {new Date().getFullYear()} by ultra profile{' '}
      </FooterDesc>
    </FooterSection>
  );
};

export default Footer;
