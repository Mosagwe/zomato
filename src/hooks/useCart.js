import React, { createContext, useContext, useState } from "react";

const cartContext = createContext(null);
export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCount, setTotalCount] = useState(3);

  const removeFromCart = (foodId) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.food.id !== foodId
    );
    setCartItems(filteredCartItems);
  };

  //   const changedQuantity = (cartItem, newQuantity) => {
  //     const { food } = cartItem;
  //     const changedCartItem = {
  //       ...cartItem,
  //       quantity: newQuantity,
  //       price: food.price * newQuantity,
  //     };
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.food.id === food.id ? changedCartItem : item
  //       )
  //     );
  //   };

  const addToCart = (food) => {
    const existingItem = cartItems.find((item) => item._id === food._id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
    setTotalCount(totalCount + 1);
  };

  return (
    <cartContext.Provider
      value={{
        cart: { items: cartItems, totalCount },
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext);
