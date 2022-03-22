import React from "react";
import "./Fourth.css";
import { Accordion } from "react-bootstrap";

const Fourth = () => {
  return (
    <div>
      <h2 className="freq">Frequently Asked Questions</h2>
      <p className="here">
        Here are some of our FAQs. if you have any other questions you'd like
        answered please feel free to email us
      </p>
      <div className="accord">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Bookmark?</Accordion.Header>
            <Accordion.Body>Lorem</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How can i request a browser</Accordion.Header>
            <Accordion.Body>lorem</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is there a mobile app?</Accordion.Header>
            <Accordion.Body>Lorem</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What about other Chromium browsers?
            </Accordion.Header>
            <Accordion.Body>Lorem</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <button className="more">more info</button>
    </div>
  );
};

export default Fourth;
