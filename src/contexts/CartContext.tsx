import { createContext, ReactNode, useEffect, useState } from "react";

interface CartContextData {
  products: ProductProps[];
  changeProducts: (products: ProductProps[]) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

interface ProductProps {
  id: number;
  name: string;
  value: string;
  size?: string;
  promotion: number;
  image: string;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState(() => {
    var storageProducts = localStorage.getItem("eshoes:products");
    if (storageProducts) {
      return JSON.parse(storageProducts);
    } else {
      return [];
    }
  });

  function changeProducts(products) {
    setProducts(products);
  }

  useEffect(() => {
    localStorage.setItem("eshoes:products", JSON.stringify(products));
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        changeProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
