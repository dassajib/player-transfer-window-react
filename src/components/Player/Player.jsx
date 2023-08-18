import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Player = (props) => {
  const { image, name, country, position, number, value } = props.player;
  return (
    <Container>
      <Row>
        <Col>
          <Card className="m-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>
                {name}({country})
              </Card.Title>
              <Card.Text>
                <span>Position : {position}</span>
                <br />
                <span>Jersey Number : {number}</span>
                <br />
                <span>Market Value : {value}</span>
              </Card.Text>
              <Button onClick={() => props.handleClick(props.player)} variant="primary">
                Make Sign
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
