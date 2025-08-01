import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const placeholder = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";

const Single = () => {
  const { type, theId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${theId}`)
      .then((res) => res.json())
      .then((data) => setItem(data.result))
      .catch(console.error);
  }, [type, theId]);

  if (!item) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const imageUrl =
    type === "people"
      ? `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${theId}.jpg`
      : `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${theId}.jpg`;

  const handleImageError = (e) => {
    e.target.src = placeholder;
  };

  return (
    <div className="container mt-5">
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Imagen */}
        <img
          src={imageUrl}
          onError={handleImageError}
          alt={item.properties?.name}
          style={{ width: "800px", height: "600px", objectFit: "cover" }}
        />

        {/* Texto al lado */}
        <div style={{ marginLeft: "40px", maxWidth: "600px" }}>
          <h1 style={{ marginTop: 0 }}>{item.properties?.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt convallis risus, sit amet tincidunt est mollis a. Nullam
            auctor, turpis a pulvinar tincidunt, libero sapien consequat elit,
            nec ultricies purus justo in erat. Integer fringilla metus in velit
            ultrices, et fermentum orci pharetra. Aenean ut tristique tellus.
            Fusce bibendum efficitur sapien. Nunc lacinia eros non lorem
            tincidunt lacinia. Sed eget magna magna. Nam non velit quam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Single;