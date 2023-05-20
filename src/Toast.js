import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function HideToast() {
  const [show, setShow] = useState(false);

  return (
    //<ToastContainer position="top-end">
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              {/* <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              /> */}
              <strong className="me-auto">Thông báo</strong>
            </Toast.Header>
            <Toast.Body>
              Hello
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    //</ToastContainer>
  );
}

export default HideToast;
