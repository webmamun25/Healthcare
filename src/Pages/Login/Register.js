import './Register.css';

import React, { useState } from 'react';

import {
  Button,
  Form,
} from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { createUserWithEmailAndPassword, auth } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    if (e.target.value.length < 8 && e.target.value.search(/[a-z]/i) < 0) {
      setError("please check your password length");
    } else {
      setPass(e.target.value);
    }
  };

  const Registration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass).then((result) => {
      const { email, displayName } = result.user;
      const info = {
        name: displayName,
        email: email,
      };
      setUser(info);
    });
  };

  return (
    <div className="formreg">
      {user.name}
      <Form onSubmit={Registration}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePass}
            type="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-muted ">
            {" "}
            <ul>
              <li className="text-danger">{error}</li>
            </ul>{" "}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
