import { ReactNode } from "react";
import { CartContext } from "../context/CartContext";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartContext.Provider value={{
      cartQuantity: 0,
      totalItems: 0,
      deliveryPrice: 3.5,
      totalPrice: 0,
      totalValueItems: 0
    }}>
      {children}
    </CartContext.Provider>
  )
}