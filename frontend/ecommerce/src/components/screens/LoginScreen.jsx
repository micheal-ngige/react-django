import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function LoginScreen() {
  return (
    <Container
      style={{
        height: "400px",
        width:"400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      backgroundColor:"papayewhip",
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>{" "}
        <br />
        <Button variant="danger" type="button" style={{ marginTop: "5px" }}>
          Login with Google
        </Button>
      </Form>
      <div style={{ marginTop: "10px" }}>
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </Container>
  );
}

export default LoginScreen;
