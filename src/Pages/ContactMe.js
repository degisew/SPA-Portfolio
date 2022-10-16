import React from 'react'
import sharedSelectors from "./SharedStyles.module.css";
const ContactMe = () => {
  return (
    <section id="contact">
      <div>
        <div className={sharedSelectors.title}>
          <h1>CONTACT</h1>
        </div>
      </div>
    </section>
  );
}

export default ContactMe
