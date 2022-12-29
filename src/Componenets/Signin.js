import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <div className=" mt-5 main">
        <div className=" mt-5 mb-2 d-flex justify-content-center container col-12">
          <Form className="mt-5 col-6">
            <Form.Group className="mt-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" className="" id="iname" />
            </Form.Group>

            <Form.Group className="mt-5" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="ipassword" />
            </Form.Group>
            <Form.Group
              className="mt-5"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div className="mt-2">
              <Link to="/Signup">Create new Account</Link>
            </div>
            <Button
              variant="primary"
              type="submit"
              className="rounded-0 mt-2"
              id="btni"
            >
              Sign in
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Signin;
