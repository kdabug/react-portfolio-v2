import React from "react";
import "./contact-list.scss";
import { contactList } from "../data/contacts.js";

const PersonalContactList = props => {
  let { location } = props;
  return (
    <div className={`contact-list-container-${location}`}>
      {contactList.map(contact => {
        return (
          <div className={`contact-info-${location}`} key={contact.url}>
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-social-icon-${location}`}
            >
              {contact.comp}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalContactList;
