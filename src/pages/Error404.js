import React from "react";
import Header from "../components/Header";

const Error404 = () => {
  return (
    <div>
      <Header underlined={"about"} />

      <div>
        <p className="title404">404</p>

        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <br />
    </div>
  );
};

export default Error404;
