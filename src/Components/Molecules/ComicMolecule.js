import React from "react";

function ComicMolecule({ comic }) {
  return (
    <div className="card">
      <img
        src={comic.thumbnail.path + "/portrait_xlarge.jpg"}
        alt="_comic"
        width="100%"
      />

      <h5 className="card__title p-0">{comic.title}</h5>
      <h6 className="card__secret_title p-1">{comic.title}</h6>
    </div>
  );
}

export default ComicMolecule;
