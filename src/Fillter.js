import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Form, Button } from "react-bootstrap";

const Fillter = (props) => {
  return (
    <div className="App-headerrr">
      <div>
      <Form className="d-flex " >
        <Form.Control
          type="Search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => props.handleFillter(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </div>
      <div>
      <Form className="d-flex " >
        <Form.Control
          type="Search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => props.handleRate(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </div>
    </div>
  );
};

export default Fillter;
