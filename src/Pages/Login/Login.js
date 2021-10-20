import React, { useState } from 'react';

import {
  Button,
  Form,
} from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle, signInWithEmailAndPassword, auth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    if (e.target.value.length < 8 && e.target.value.search(/[a-z]/i) < 0) {
      setError("please check your password length");
    } else {
      setPassword(e.target.value);
    }
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        const info = {
          email: email,
        };
        setUser(info);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <div className="formreg">
        <Form onSubmit={handleLogin}>
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
            Login
          </Button>
        </Form>
      </div>
      <h2>Please Login with google</h2>
      <button onClick={signInUsingGoogle} className="btn btn-warning">
        <i class="bi bi-google"></i> Google Sign In
      </button>
    </div>
  );
};

export default Login;
