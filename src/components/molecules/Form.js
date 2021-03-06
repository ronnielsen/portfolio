import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

function Form() {
  function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'service_ub1o32e', e.target, 'user_AMPXPkQ3BxJ7qAThZQquR')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Form
