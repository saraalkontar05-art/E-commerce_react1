import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartSidebar() {
  const { cart, totalItems, totalPrice, open, setOpen } =
    useContext(CartContext);

  return (
    <>
      {open && <div className="bg-cart" onClick={() => setOpen(false)}></div>}

      <div className={`container cart-sidebar ${open ? "open" : ""}`}>
        <Row>
          {cart.length === 0 ? (
            <Col sm={12} className="text-center mt-5">
              <h2 className="fw-bold text-muted">Your Cart is Empty</h2>

              <Button
                onClick={() => {
                  document
                    .getElementById("products")
                    .scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="btn-cart-back mt-3"
              >
                Go to Product
              </Button>
            </Col>
          ) : (
            <>
              <Col>
                <Button
                  className="btn btn-close my-4 "
                  onClick={() => setOpen(false)}
                ></Button>
              </Col>
              <Col
                sm={12}
                className="d-flex justify-content-between align-items-center"
              >
                <h3 style={{ color: "rgba(107,178,1,1)" }}>Your Cart</h3>
                <span
                  style={{
                    backgroundColor: "rgba(107,178,1,1)",
                    color: "white",
                    padding: "0 5px",
                    borderRadius: "15px",
                  }}
                  className="small"
                >
                  {totalItems}
                </span>
              </Col>

              {cart.map((item) => {
                return (
                  <Col
                    key={item.id}
                    sm={12}
                    className="d-flex justify-content-between"
                  >
                    <p className="fw-bold">{item.name}</p>
                    <p className="text-secondary">
                      ${item.price * item.quantity}
                    </p>
                  </Col>
                );
              })}

              <Col className="d-flex justify-content-between">
                <p className="text-secondary">Total (USD)</p>
                <p className="text-secondary">${totalPrice}</p>
              </Col>
            </>
          )}
        </Row>
      </div>
    </>
  );
}

export default CartSidebar;
