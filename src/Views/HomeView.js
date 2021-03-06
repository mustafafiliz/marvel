import React from "react";

import { HeaderComponent } from "../Components";
import { CharacterListOrganism } from "../Components/Organisms";

function HomeView() {
  return (
    <>
      <HeaderComponent />
      <div className="pt-4 pb-5">
        <div className="container">
          <div className="row">
            <CharacterListOrganism />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeView;
