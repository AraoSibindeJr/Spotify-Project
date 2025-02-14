import React from "react";
import Player from "../Player";

const Song = () => {
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

      <div className="song__bar">
        <div className="song__artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9"
            alt="Imagem do Artista Z"
          />
        </div>

        <Player />
        <div>
          <p className="song__name">Xonei</p>
          <p>Henrique & Juliano</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
