import {
  Container,
  Row,
  Col,
  Toast,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "./../logo.svg";
import { useForm } from "react-hook-form";
import { AppContext } from "../components/StateProvider";

function Login() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { setState,handleSetCookie } = useContext(AppContext);

  const login = ({ email, password }) => {
    // get the users data
    const user = localStorage.getItem(email);

    if (!user) {
      return alert("An account for this email was not found");
    }

    const userdata = JSON.parse(user);

    if (password !== userdata.password) {
      return alert("email or password was incorrect");
    }
    handleSetCookie(userdata);
    setState((prevstate) => {
      return {
        ...prevstate,
        isLoggedIn: true
      };
    });
    history.replace("/dashboard");
  };
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
                  <i
                    className="fas fa-sign-in-alt icon"
                    arial-hidden="true"
                  ></i>
                  <strong>Login</strong>
                </h2>
              </Col>
              <Col sm={4}>
                <span>
                  <Image fluid src={logo} className="formLogo" />
                </span>
              </Col>
            </Row>
            <hr />
            <Toast.Body>
              <Form onSubmit={handleSubmit(login)}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    {...register("password", { required: true })}
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Login
                </Button>
              </Form>

              <p>
                Not yet registered? <Link to="/register">Click here</Link>
              </p>
            </Toast.Body>
          </Toast>
        </Col>
        <Col md={2} sm={12}></Col>
      </Row>
    </Container>
  );
}

export default Login;
