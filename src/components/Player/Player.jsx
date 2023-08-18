import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Player = (props) => {
  const { id, image, name, country, position, number, value } = props.player;
  return (
    <Row xs={1} md={2}>
      <Col>
        <Card className="m-4" style={{ width: "30rem" }}>
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
            <Container>
              {/* Individual player's page info */}
              <Link to={`/player/${id}`} className="mx-2">
                <Button variant="primary">Other's Info</Button>
              </Link>
              <Button
                className="mx-2"
                onClick={() => props.handleClick(props.player)}
                variant="primary"
              >
                Make Sign
              </Button>
              <Button
                onClick={() => props.handleRemove(props.player.id)}
                className="mx-2"
                variant="primary"
              >
                Remove
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Player;
