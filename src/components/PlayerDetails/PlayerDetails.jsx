import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PlayerDetails = () => {
  const { playerId } = useParams();

  useEffect(() => {
    const url = `/fakedata.JSON/${playerId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>PlayerDetails {playerId}</div>;
};

export default PlayerDetails;
