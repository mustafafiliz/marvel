import React from "react";
import { Link } from "react-router-dom";

function CharacterComponent({ char }) {
  return (
    <div className="card">
      <img
        src={char.thumbnail.path + "/portrait_xlarge.jpg"}
        width="100%"
        height="200px"
        alt="_character"
      />
      <Link to={`/details/${char.id}`} className="card__name">
        {char.name}
      </Link>
    </div>
  );
}

export default CharacterComponent;
