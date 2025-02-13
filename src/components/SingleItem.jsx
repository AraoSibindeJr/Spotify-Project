import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const SingleItem = ({ id, name, image, banner, artist, idPath }) => {
  return (
    <a href={`${idPath}/${id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div>
          <div className="single-item__div-image">
            <img
              className="single-item__image"
              src={image}
              alt={`Imagem do Artista  ${name}`}
            />
          </div>
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </a>
  );
};

export default SingleItem;
