import React from "react";
import { Form, Button } from "react-bootstrap";

function Signup() {
  return (
    <>
      <div className="main">
        <div className="mt-2 d-flex justify-content-center container  col-12">
          <Form className="mt-3 col-6 ">
            <Form.Group className="mt-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="name" className="con" />
            </Form.Group>

            <Form.Group className="mt-4">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" className="con" />
            </Form.Group>

            <Form.Group className="mt-4">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" name="phone" className="con" />
            </Form.Group>

            <Form.Group className="mt-4">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" name="use" className="con" />
            </Form.Group>

            <Form.Group className="mt-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" className="con" />
            </Form.Group>
            <Form.Group
              className="mt-4"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="rounded-0"
              id="btni"
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Signup;
