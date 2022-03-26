import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";
import ComicsListComponent from "./Organisms/ComicsListComponent";

function CharacterDetailComponent() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=aed63c1335e9a5ba42be7f320a3bedd7&hash=4ec35bcedeabc68ce69ef29881e68bea`;

  useEffect(() => {
    axios.get(url).then((res) => {
      return setItem(res.data.data.results[0]), setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-100 h-75 d-flex align-items-center  justify-content-center">
          <GridLoader color="#f2f2f2" loading={loading} size={30} />
        </div>
      ) : (
        <>
          <div className="row pt-4">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mt-4">
              <img
                width="100%"
                src={item.thumbnail.path + "/portrait_xlarge.jpg"}
                alt="_character"
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <h1 className="font-30 p-0 mb-0"> {item.name} </h1>
              <p className="p-0 my-1">
                {item.description == ""
                  ? `${item.name} character has no description`
                  : item.description}
              </p>
              <h2 className="mt-4">Comics</h2>
              <div className="row">
                <ComicsListComponent id={item.id} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CharacterDetailComponent;
