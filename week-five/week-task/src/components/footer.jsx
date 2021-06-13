import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <hr className="line"/>
      <Container fluid>
        <Row
          className="d-flex justify-content-center align-items-center"
          noGutters
        >
          <Col
            sm={12}
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <p className="text-muted"><small>Copyright 2021 Evelyn Anyebe</small></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
