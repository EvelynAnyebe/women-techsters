import {
  Container,
  Row,
  Col,
  Toast,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";

function Register() {
  return (
      <Container>
        <Row
          className="d-flex justify-content-center align-items-center main"
          noGutters
        >
          <Col md={2} sm={12}></Col>
          <Col
            sm={12}
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <Toast className="myForm">
              <Row className="myForm-header">
                <Col sm={8}>
                  <h2>
                    <i className="fas fa-user icon" arial-hidden="true"></i>
                    <strong>Register</strong>
                  </h2>
                </Col>
                <Col sm={4}>
                  <span><Image fluid src={logo} className="formLogo"/></span>
                </Col>
              </Row>

              <hr />
              <Toast.Body>
                <Form>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      md={6}
                      sm={12}
                      controlId="formGridEmail"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md={6}
                      sm={12}
                      controlId="formGridPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" placeholder="1234 Main St" />
                  </Form.Group>

                  <Button variant="success" type="submit">
                    Register
                  </Button>
                </Form>

                <p>
                  Already registered? <Link to="/login">Login Here</Link>
                </p>
              </Toast.Body>
            </Toast>
          </Col>
          <Col md={2} sm={12}></Col>
        </Row>
      </Container>
  );
}

export default Register;
