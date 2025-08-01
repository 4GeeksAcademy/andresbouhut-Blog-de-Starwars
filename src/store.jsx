import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({ favorites: [] });

  const addFavorite = (item) => {
    setStore((prev) => ({
      ...prev,
      favorites: [...prev.favorites, item],
    }));
  };

  const removeFavorite = ({ uid, type }) => {
    setStore((prev) => ({
      ...prev,
      favorites: prev.favorites.filter(
        (fav) => fav.uid !== uid || fav.type !== type
      ),
    }));
  };

  return (
    <Context.Provider value={{ store, actions: { addFavorite, removeFavorite } }}>
      {children}
    </Context.Provider>
  );
};

export const useStore = () => useContext(Context);
