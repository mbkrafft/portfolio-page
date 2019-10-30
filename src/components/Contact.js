import React from 'react';

import ReactContactForm from 'react-mail-form';


export default function Contact(props) {

  let inputData = props.inputData;

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to send me an email for any enquiries
          </p>
        </div>
      </div>
      <div className="row">
        <ReactContactForm to={inputData.email} buttonText="Click here to send the email" />
      </div>
    </section>
  );
}
