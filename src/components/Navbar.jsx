import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store"; 

const Navbar = () => {
  const { store, actions } = useStore(); 

  const handleRemoveFavorite = (uid, type) => {
    actions.removeFavorite({ uid, type }); 
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container justify-content-between">
        <Link to="/">
          <img
            src="https://img.icons8.com/color/512/star-wars.png"
            alt="Star Wars Logo"
            style={{ height: "40px" }}
          />
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites ({store.favorites.length})
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="favoritesDropdown"
          >
            {store.favorites.length === 0 ? (
              <li className="dropdown-item text-muted">No favorites</li>
            ) : (
              store.favorites.map((fav, index) => (
                <li
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <span>{fav.name}</span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveFavorite(fav.uid, fav.type)}
                  >
                    ×
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
