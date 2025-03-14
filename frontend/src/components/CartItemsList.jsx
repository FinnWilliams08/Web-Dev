import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { getNumberOfItemsInCart, getCartTotal } from "../utils/cartManagement";
import { CartItem } from "./CartItem";

export const CartItemsList = ({ inMemory = true, cartItemsProp = [] }) => {
  const cartItems = inMemory ? useContext(CartContext)[0] : cartItemsProp;
  const numberOfItems = getNumberOfItemsInCart(cartItems);
  const cartTotal = getCartTotal(cartItems);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "8px 8px",
          gridTemplateColumns: "1fr 5fr 2fr 2fr 1fr",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {cartItems.map((item, index) => (
          <CartItem
            key={item.id + item.title}
            index={index}
            item={item}
            inMemory={inMemory}
          />
        ))}
      </div>
      <p>Number of Items in cart: {numberOfItems}</p>
      <p>Your total is: £{cartTotal}</p>
    </div>
  );
};
