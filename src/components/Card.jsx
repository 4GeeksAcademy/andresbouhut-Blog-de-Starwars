import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";

const placeholder = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";

const Card = ({ uid, name, type }) => {
  const { store, actions } = useStore();

  const isFavorite = store.favorites.some(
    (fav) => fav.uid === uid && fav.type === type
  );

  const handleFavorite = () => {
    const item = { uid, name, type };
    if (isFavorite) {
      actions.removeFavorite(item);
    } else {
      actions.addFavorite(item);
    }
  };

  const imageUrl =
    type === "people"
      ? `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${uid}.jpg`
      : `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${uid}.jpg`;

  const handleImageError = (e) => {
    e.target.src = placeholder;
  };

  return (
    <div className="card m-2" style={{ minWidth: "250px" }}>
      <img
        src={imageUrl}
        onError={handleImageError}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/single/${type}/${uid}`} className="btn btn-primary">
            Learn more
          </Link>
          <button
            onClick={handleFavorite}
            className="btn btn-outline-warning"
            title="Toggle favorite"
          >
            <i className={`fa${isFavorite ? "s" : "r"} fa-star`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;