import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaEnvelopeSquare,
  FaLinkedin
} from "react-icons/fa";

export const contactList = [
  {
    name: "Github",
    comp: <FaGithub size={50} className={"icon"} />,
    icon: "Github",
    type: "social-media",
    url: "https://github.com/kdabug"
  },
  {
    name: "Twitter",
    comp: <FaTwitter size={50} className={"icon"} />,
    icon: "Twitter",
    type: "social-media",
    url: "https://twitter.com/kdabug"
  },
  {
    name: "Instagram",
    comp: <FaInstagram size={50} className={"icon"} />,
    icon: "Instagram",
    type: "social-media",
    url: "https://www.instagram.com/kdabug"
  },
  {
    name: "LinkedIn",
    comp: <FaLinkedin size={50} className={"icon"} />,
    icon: "Linkedin",
    type: "social-media",
    url: "https://www.linkedin.com/in/mikayda"
  },
  {
    name: "Email",
    comp: <FaEnvelopeSquare size={50} className={"icon"} />,
    icon: "EnvelopeSquare",
    type: "email",
    url: "mailto:mills.ma12@gmail.com"
  }
];
