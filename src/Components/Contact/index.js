import React from 'react';
import {
  Span,
  ContactSection,
  ContactTitle,
  Form,
  FormInput,
  InputEmail,
  InputSub,
  InputSubmit,
  InputText,
  Textarea,
} from './style.js';
import Footer from './../Footer';
const Contact = () => {
  return (
    <>
      <ContactSection>
        <div className="container">
          <ContactTitle>
            <Span>Drop </Span>Me A line
          </ContactTitle>
          <Form action="">
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputSub type="text" className="sub" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </>
  );
};

export default Contact;
