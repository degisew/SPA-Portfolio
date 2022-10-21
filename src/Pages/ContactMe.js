import React from 'react'
import sharedSelectors from "./SharedStyles.module.css";
import selectors from "./ContactMe.module.css";
import { contact } from '../Components/Data';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
 import { FaLinkedinIn } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
const ContactMe = () => {
  return (
    <section id="contact">
      <div>
        <div className={sharedSelectors.title}>
          <h1>CONTACT</h1>
        </div>
        <div className={selectors.contactDiv}>
          <div className={selectors.address}>
            <address className={selectors.city}>{contact.address}</address>
            <address className={selectors.postalCode}>
              {contact.postalCode}
            </address>
            <address className={selectors.phone}>{contact.Phone}</address>
            <address className={selectors.email}>{contact.email}</address>
          </div>
          <div className={selectors.contactIcons}>
              <a href="https://www.linkedin.com/in/degisew-mengist">
                <AiFillLinkedin className={selectors.linkedin} />
              </a>
            <a href="https://www.github.com/degisew">
              <AiFillGithub className={selectors.github} />
            </a>
            <a href="https://www.twitter.com/@DJ_etiya">
              <AiFillTwitterCircle className={selectors.twitter} />
            </a>
            <a href="mailto:degisew.mengist21@gmail.com">
              <ImMail4 className={selectors.gmail} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe
