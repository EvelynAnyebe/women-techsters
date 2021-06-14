import { Container, Row, Col } from "react-bootstrap";
import {useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const paths = ["/login", "/register"];
  return (
    <footer className="mt-5">
       {!paths.includes(pathname) && (
     
      <Container fluid>
         <hr className="line"/>
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
       )}
    </footer>
  );
};

export default Footer;
