
import {Form, Container, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function RegisterScreen() {
  return (
    <Container
      style={{
        height: "600px",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "papayewhip",
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control type="first name" placeholder="fisrt name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Last name</Form.Label>
          <Form.Control type="name" placeholder="last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control type="password" placeholder=" Confirm Password" />
        </Form.Group>       
        <Button variant="primary" type="submit">
          Register
        </Button>{" "}
      </Form>
      <div style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </Container>
  );
}

export default RegisterScreen;
