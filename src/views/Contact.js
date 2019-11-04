import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactContainer = styled.div`
  .card {
    background-color: black;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicTextArea">
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;
