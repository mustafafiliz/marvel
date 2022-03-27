import React, { useEffect, useState } from "react";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import { CharacterMolecule } from "../Molecules";

function CharacterListOrganism() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    axios
      .get(
        decodeURIComponent(`http://gateway.marvel.com/v1/public/characters?limit=30
    &ts=1&apikey=aed63c1335e9a5ba42be7f320a3bedd7&hash=4ec35bcedeabc68ce69ef29881e68bea`)
      )
      .then((res) => {
        return setCharacters(res.data.data.results), setLoading(false);
      });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (parseInt(clientHeight + scrollTop) !== scrollHeight) {
      // do nothing
      return;
    }
    // set more item
    // limit greater than 100 409 htpp status error code
    const newLimit = 100;
    return (
      setLoadMore(true),
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters?limit=${newLimit}
   &ts=1&apikey=aed63c1335e9a5ba42be7f320a3bedd7&hash=4ec35bcedeabc68ce69ef29881e68bea`
        )
        .then((res) => {
          return setCharacters(res.data.data.results), setLoadMore(false);
        })
    );
  }

  return (
    <>
      {loading ? (
        <div className="w-100 h-75 d-flex align-items-center  justify-content-center">
          <GridLoader color="#f2f2f2" loading={loading} size={30} />
        </div>
      ) : (
        characters.map((char) => {
          return (
            <div
              className="col-lg-2 col-md-3 col-sm-6 col-xs-6 mt-4"
              key={char.id}
            >
              <CharacterMolecule char={char} />
            </div>
          );
        })
      )}
      {loadMore ? (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 pb-5">
          <div className="d-flex align-items-center justify-content-center">
            <PropagateLoader color="#f2f2f2" loading={loadMore} size={30} />
          </div>
        </div>
      ) : null}
    </>
  );
}
export default CharacterListOrganism;
