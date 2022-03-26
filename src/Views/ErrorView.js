import React from "react";
import { Link } from "react-router-dom";

function ErrorView() {
  return (
    <>
      <div className="mt-5 d-flex flex-column align-items-center justify-content-center w-100 h-75">
        <div className="mt-5">
          <img
            width="250px"
            className="error__logo"
            src="assets/img/error.jpg"
            alt="_error"
          />
        </div>

        <h2 className="p-0 my-1">Oops :/</h2>
        <h2 className="pb-5 my-1">Something is wrong!</h2>
        <Link className="btn btn--lg btn--opacity-8" to="/">
          Go Home Page
        </Link>
      </div>
    </>
  );
}

export default ErrorView;
