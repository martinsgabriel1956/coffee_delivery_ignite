import { ReactNode, useCallback, useEffect, useState } from "react";
import { Coffee, CoffeeContext } from "../context/CoffeeContext";
import { api } from "../lib/axios";

interface CoffeeProviderProps {
  children: ReactNode;
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

  const getCoffeeList = useCallback(async () => {
    try {
      const response = await api.get("/coffee");
      const data = response.data;

      setCoffeeList(data);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  useEffect(() => {
    getCoffeeList();
  }, [])

  return (
    <CoffeeContext.Provider value={{
      data: coffeeList
    }}>
      {children}
    </CoffeeContext.Provider>
  );
}