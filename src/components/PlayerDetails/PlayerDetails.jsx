import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const PlayerDetails = () => {
  const { playerId } = useParams();

  //   useNavigate for changing page
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  //   useEffect(() => {
  //     const url = `/fakedata.JSON/${playerId}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  return (
    <div>
      PlayerDetails {playerId}
      <Button onClick={handleClick} variant="primary">
        Home Page
      </Button>
    </div>
  );
};

export default PlayerDetails;
