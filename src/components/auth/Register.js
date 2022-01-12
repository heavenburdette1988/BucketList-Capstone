import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Modal, Container } from "react-bootstrap";


export const Register = () => {
  const [email, setEmail] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json())
    .then(user => !!user.length)
  }

  const handleRegister = (e) => {
    e.preventDefault();
    existingUserCheck()
    .then((userExists) => {
      if (!userExists) {
        fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
        .then(res => res.json())
        .then(createdUser => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem('react_trapperKeeper_user', JSON.stringify(createdUser));
              navigate("/home");
            }
        })
      }
      else {
        setShow(true);
      }
    });
  }

  return (
    <Container
      className='d-flex align-items-center'
      style={{
        height: '100vh'
      }}
    >
      <Modal 
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <p>
            User already exist!
          </p>
        </Modal.Body>
      </Modal>
      <Form>
        <Form.Group>
          <Form.Label><p className="loginTitle">Register with Email</p></Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
           <p> You can trust us!</p>
          </Form.Text>
          <Form.Text  className="text-muted">
            Already have an account? <Link to='/login' >Login</Link>
          </Form.Text>
        </Form.Group>
        <Button onClick={handleRegister} variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}