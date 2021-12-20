import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Modal, Container } from 'react-bootstrap';


export const Login = (props) => {

  const [email, set] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json())
    .then(user => user.length ? user[0] : false);
  }

  const handleLogin = e => {
    e.preventDefault();
    existingUserCheck()
    .then( userExists => {
      if (userExists) {
        localStorage.setItem('react_trapperKeeper_user', userExists.id);
        navigate('/');
      } else {
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
            User doesnt exist
          </p>
        </Modal.Body>
      </Modal>
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => set(e.target.value)} type="email"  placeholder="Enter email" />
          <Form.Text  className="text-muted">
            You can trust us!
          </Form.Text>
          <Form.Text  className="text-muted">
            Don't have an account? <Link to='/register' >Register</Link>
          </Form.Text>
        </Form.Group>
        <Button onClick={handleLogin} variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
}