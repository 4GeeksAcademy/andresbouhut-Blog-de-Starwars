import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const CharacterDetails = () => {
  const { uid } = useParams();
  const placeholder =
    "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
  const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${uid}.jpg`;

  const handleImageError = (e) => {
    e.target.src = placeholder;
  };

  return (
    <>
      <div className="container mt-4 d-flex">
        <img
          src={imageUrl}
          alt={`Character ${uid}`}
          width="800"
          height="600"
          onError={handleImageError}
          style={{ objectFit: "cover" }}
        />
        <div className="ms-4 flex-grow-1">
          <h1>Character {uid}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default CharacterDetails;