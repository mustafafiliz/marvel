import React from "react";
import { HeaderComponent, CharacterDetailComponent } from "../Components";

function DetailsView() {
  return (
    <>
      <HeaderComponent />
      <div className="container">
        <CharacterDetailComponent />
      </div>
    </>
  );
}

export default DetailsView;
