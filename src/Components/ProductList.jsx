import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ productsView }) => {
  return (
    <Container>
      <Row>
        {productsView.map((product) => (
          <Col lg={3} md={4} key={product.id}>
            <ProductCard objectProduct={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
