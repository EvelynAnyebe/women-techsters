import { Container, Row, Col, Card } from "react-bootstrap";

function ViewShoppingList() {
  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center mt-5"
        noGutters
      >
        <Col md={2}></Col>
        <Col sm={12} md={8}>
          <Card>
            <Card.Body>
              <h3>
                My Shopping List
                <i className="fas fa-list-alt icon" aria-hidden="true"></i>
              </h3>
              <hr />
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default ViewShoppingList;
