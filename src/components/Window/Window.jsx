import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Player from "../Player/Player";
import ContractInfo from "../ContractInfo/ContractInfo";

const Window = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayPlayer, setDisplayPlayer] = useState([]);

  useEffect(() => {
    fetch("/fakedata.JSON")
      .then((res) => res.json())
      .then((data) => {
        // after seeing search result when we need to refresh then all data will be vanished that's why data set on setPlayers and setDisplayPlayers both
        setPlayers(data);
        setDisplayPlayer(data);
      });
  }, []);

  // click function write here because react follow's uni direction
  const handleClick = (player) => {
    // we need to use immute, that's why at first i do copy then add new click result
    const newCart = [...cart, player];
    setCart(newCart);
  };

  const handleSearch = (e) => {
    const searchedPlayer = e.target.value;
    // filter applied for getting result after search
    const searchedResult = players.filter((player) =>
      player.name.toLowerCase().includes(searchedPlayer.toLowerCase())
    );
    setDisplayPlayer(searchedResult);
  };

  return (
    <Container>
      <Form.Control
        onChange={handleSearch}
        type="text"
        className="mt-2 border-4"
        placeholder="search here"
      />
      <Row>
        <Col sm={9}>
          {players.length === 0 ? (
            <div className="d-flex justify-content-center mt-1 mb-1">
              <Spinner animation="border" />
            </div>
          ) : (
            <Container>
              {/* mapping on displayPlayer for getting result based on search  */}
              {displayPlayer.map((player) => (
                <Player
                  key={player.id}
                  player={player}
                  handleClick={handleClick}
                ></Player>
              ))}
            </Container>
          )}
        </Col>
        <Col sm={3}>
          <ContractInfo cart={cart} />
        </Col>
      </Row>
    </Container>
  );
};

export default Window;
