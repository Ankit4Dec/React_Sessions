import { Outlet, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import routes from "./../routes/routes.json";

const ProductLayout = () => {
  const slideStyles = {
    border: "solid 2px #bbb",
    backgroundColor: "antiquewhite",
    width: "10%",
  };

  return (
    <Container>
      <Row>
        <Col sm={1} style={slideStyles}>
          <ul>
            <li>
              <Link to="1">Product 1</Link>
            </li>
            <li>
              <Link to="2">Product 2</Link>
            </li>
            <li>
              <Link to="3">Product 3</Link>
            </li>
            <li>
              <Link to="4">Product 4</Link>
            </li>
            <li>
              <Link to="5">Product 5</Link>
            </li>
            <li>
              <Link to="6">Product 6</Link>
            </li>
            <li>
              <Link to="7">Product 7</Link>
            </li>
            <li>
              <Link to="8">Product 8</Link>
            </li>
            <li>
              <Link to={routes.SUGGESTION}>Product Suggestion</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductLayout;
