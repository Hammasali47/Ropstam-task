import React from "react";
import { Container, Row } from "react-bootstrap";

const Mainscreen = ({ title, children }) => {
  return (
    <div>
      <Container>
        <Row>
          <div>
            {title && (
              <>
                <h1>{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Mainscreen;
