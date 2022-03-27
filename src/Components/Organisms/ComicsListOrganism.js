import React, { useEffect, useState } from "react";
import axios from "axios";
import { ComicMolecule } from "../Molecules";

function ComicsListOrganism({ id }) {
  const [items, setItem] = useState([]);
  const url = `http://gateway.marvel.com/v1/public/characters/${id}/comics?orderBy=-focDate&limit=10&ts=1&apikey=aed63c1335e9a5ba42be7f320a3bedd7&hash=4ec35bcedeabc68ce69ef29881e68bea`;

  useEffect(() => {
    axios.get(url).then((res) => {
      return setItem(res.data.data.results);
    });
  }, []);
  return (
    <>
      {items.map((comic) => {
        return (
          <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
            <ComicMolecule comic={comic} />
          </div>
        );
      })}
    </>
  );
}

export default ComicsListOrganism;
