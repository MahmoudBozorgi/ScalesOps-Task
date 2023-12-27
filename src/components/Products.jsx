import { Container, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendCardsRequest } from "../redux/modules/Cards";
import { useEffect } from "react";
import Loading from "./Loading";

function Products() {
  const { loading, data } = useSelector((state) => state.cardsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendCardsRequest());
  }, [dispatch]);

  return (
    <Container className="py-5">
      {loading ? (
        <Loading />
      ) : (
        <Row xs={1} md={2} lg={2} xl={3} className="g-4">
          {data.map((product, index) => (
            <Col key={index}>
              <Card className="h-100 shadow p-1 mb-3 bg-body rounded">
                <div className="d-flex justify-content-center ">
                  <Card.Img
                    className="w-25 mx-auto d-block pt-3 "
                    variant="top"
                    src={product.image}
                    width={150}
                    height={150}
                  />
                </div>
                <Card.Body className="position-relative mb-1">
                  <Card.Title className="text-center">
                    {product.title}
                  </Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="position-absolute bottom-0 start-10 ">
                    {product.price}$
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Products;
