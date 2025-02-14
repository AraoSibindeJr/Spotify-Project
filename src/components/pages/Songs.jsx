import React from "react";
import Main from "../Main";

const Songs = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem da musica X"
          />
        </div>
      </div>

      <div className="song__bar"></div>
    </div>
  );
};

export default Songs;
