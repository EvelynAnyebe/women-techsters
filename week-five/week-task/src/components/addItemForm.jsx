import { Container, Row, Col, Toast, Form, Button, Nav } from "react-bootstrap";

import { useState } from "react";

function AddItemForm() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <Container className="mt-5">
      <Row
        id="addItem"
        className="d-flex justify-content-center align-items-center"
        noGutters
      >
        <Col sm={8}>
          <Nav fill className="add-form-show">
            <Nav.Item onClick={toggleShow}>
              <Button variant="success" type="submit">
                <i className="fas fa-plus icon" arial-hidden="true"></i>
              </Button>
            </Nav.Item>
          </Nav>
          <Toast className="myForm mt-5" show={show} onClose={toggleShow}>
            <Toast.Header>
              <h2>
                <strong className="mr-auto">Add Item</strong>
              </h2>
              <hr />
            </Toast.Header>

            <Toast.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} md={6} sm={12} controlId="formGridTitle">
                    <Form.Label>Item Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md={6}
                    sm={12}
                    controlId="formGridQuantity"
                  >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" placeholder="e.g 2" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Cooking items for the week"
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  <i className="fas fa-plus icon" arial-hidden="true"></i>
                </Button>
              </Form>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
}

export default AddItemForm;
