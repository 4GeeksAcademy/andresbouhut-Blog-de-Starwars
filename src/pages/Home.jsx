import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch(console.error);

    fetch("https://www.swapi.tech/api/planets?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch(console.error);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Characters</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto mb-5">
        {characters.map((item) => (
          <Card key={item.uid} uid={item.uid} name={item.name} type="people" />
        ))}
      </div>

      <h1 className="mb-3">Planets</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {planets.map((item) => (
          <Card key={item.uid} uid={item.uid} name={item.name} type="planets" />
        ))}
      </div>
    </div>
  );
};

export default Home;