import React, { createContext, useContext, useState } from "react";

const FavoriteProductsContext = createContext();

export const useFavoriteProducts = () => {
  return useContext(FavoriteProductsContext);
};

const AcountUsersContext = createContext();

export const useUserAccounts = () => {
  return useContext(AcountUsersContext);
};

const CartContext = createContext();

export const CartProduct = () => {
  return useContext(CartContext)
}

export const FavoriteProductsProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);
  const addUser = (user) => {
    setUserAccounts((prevUserAccounts) => [...prevUserAccounts, user]);
  };



  const [cart, setCart] = useState([]);


  return (
    // <CartContext.Provider value={{ cart, addItemCart }} >
    <AcountUsersContext.Provider value={{ userAccounts, addUser }}>
      <FavoriteProductsContext.Provider value={{ favoriteProducts, setFavoriteProducts }} >
        <CartContext.Provider value={{ cart, setCart }} >
          {children}
        </CartContext.Provider>
      </FavoriteProductsContext.Provider>
    </AcountUsersContext.Provider>
    // </CartContext.Provider >
  );
};

