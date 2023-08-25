import { createContext } from "react";

export interface Coffee {
  name: string;
  description: string;
  price: number;
  qtd: number;
  type: {
    id: number;
    name: string;
  }[];
  image?: string;
}

export interface CoffeeContextData {
  data: Coffee[];
}

export const CoffeeContext = createContext({} as CoffeeContextData);
