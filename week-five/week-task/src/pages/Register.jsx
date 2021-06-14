import { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Toast,
  Form,
  Button,
  Image,
  InputGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import logo from "./../logo.svg";

function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    phonenumber: "",
    password: "",
    address: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phonenumberRef = useRef();
  const addressRef = useRef();

  // const [validated, setValidated] = useState(false);

  const handleFormData = (e) => {
    e.preventDefault();
    setField(e.target.name, e.target.value);
  };

  const setField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const findFormErrors = () => {
    const { email, phonenumber, password, confirmPassword, address } = formData;
    const newErrors = {};
    // email
    if (!email || email === "") newErrors.email = "Email must not be blank";
    else if (email.indexOf("@") === -1 || email.indexOf(".") === -1)
      newErrors.name = "Please enter a valid email";
    // phone number errors
    if (!phonenumber || isNaN(parseInt(phonenumber.trim())))
      newErrors.phonenumber = "Please enter a valid phone number";
    else if (phonenumber.trim().length !== 11)
      newErrors.phonenumber = "Phone number must be 11 digits";
    // password errors
    if (!password.trim() || password.trim().length < 8)
      newErrors.password = "Password must be 8 characters or more!";
    // Address errors
    if (!address.trim() || address.trim().length < 10)
      newErrors.address = "Address must be 10 characters or more!";
    // Confirm password errors
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match!";

    return newErrors;
  };
  const registerUser = (e) => {
    e.preventDefault();
    // geterrors
    const newErrors = findFormErrors();

    // console.log(newErrors);
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
      return false;
    }

    // Search for user
    const userFound = localStorage.getItem(formData.email);
    if (userFound) {
      return alert("This user has already been registered");
    }
    // create new user object and save it to local storage
    const newUser = {
      userId: Date.now(),
      email: formData.email,
      phonenumber: formData.phonenumber,
      password: formData.password,
      address: formData.address,
      shoppingList: []
    };
    // save the users data for accessing later
    localStorage.setItem(formData.email, JSON.stringify(newUser));

    
    setFormData({});
    setErrors({});
    alert("Registration successfull");
    history.push("/login");
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
                  <i className="fas fa-user icon" arial-hidden="true"></i>
                  <strong>Register</strong>
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
              <Form noValidate onSubmit={registerUser}>
                <Form.Row>
                  <Form.Group as={Col} md={6} sm={12}>
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="email"
                        required
                        isInvalid={!!errors.email}
                        placeholder="Enter email"
                        name="email"
                        id="email"
                        ref={emailRef}
                        onBlur={handleFormData}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md={6} sm={12}>
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        required
                        isInvalid={!!errors.phonenumber}
                        placeholder="phonenumber"
                        name="phonenumber"
                        id="phonenumber"
                        ref={phonenumberRef}
                        onBlur={handleFormData}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phonenumber}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6} sm={12}>
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        required
                        isInvalid={!!errors.password}
                        ref={passwordRef}
                        onBlur={handleFormData}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={12}>
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        isInvalid={!!errors.confirmPassword}
                        ref={confirmPasswordRef}
                        onBlur={handleFormData}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      as="textarea"
                      placeholder="1234 Main St"
                      name="address"
                      id="address"
                      required
                      isInvalid={!!errors.address}
                      ref={addressRef}
                      onBlur={handleFormData}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Button variant="success" type="submit">
                  Register
                </Button>
              </Form>

              <p>
                Already registered? <Link to="/login">Login Here</Link>&nbsp; |
                &nbsp;
                <Link to="/home">Home</Link>
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
