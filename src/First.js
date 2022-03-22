import React from "react";
import "./First.css";
import { Accordion } from "react-bootstrap";

const First = () => {
  return (
    <div>
      <h2 className="feature">Features</h2>
      <p className="aim">
        Our aim is to make it quick and easy for you to access your favourite
        websites. your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div className="accord1">
        <hr />

        <p className="sim">Simple Bookmarking</p>
        <hr />
        <p>Speedy Searching</p>
        <hr />
        <p>Easy Sharing</p>
        <hr />
      </div>
      {/* <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Simple Bookmarking</Accordion.Header>
            <Accordion.Body>Lorem</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Speedy Searching</Accordion.Header>
            <Accordion.Body>Lorem</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Easy Sharing</Accordion.Header>
            <Accordion.Body>Lorem</Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
    </div>
  );
};

export default First;
