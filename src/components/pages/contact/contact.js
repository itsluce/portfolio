import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./contact.module.css";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("luce11", "template_z37vq65", form.current, "V72EEn2xzasKxu8Mx")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <article className={classes.contact} id="contact">
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={classes.contactContainer}
        >
          <h2>For contact me...</h2>
          <div className={classes.signupInput}>
            <input type="text" required name="user_name" placeholder="Name" />
            <input
              type="email"
              id="email"
              required
              name="user_email"
              placeholder="Email adress"
            />
          </div>
          <div className={classes.signupInput}>
            <textarea name="message" placeholder="Massage" required />
            <button type="submit" className={classes.signupButton}>
              Send
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};
