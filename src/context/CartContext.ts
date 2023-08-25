import { createContext } from "react";

interface CartContextProps {
  totalPrice: number;
  totalValueItems: number;
  deliveryPrice: number;
  totalItems: number;
  cartQuantity: number;
}

export const CartContext = createContext({} as CartContextProps);
