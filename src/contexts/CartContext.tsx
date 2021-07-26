import { createContext, ReactNode, useEffect, useState } from "react";

interface CartContextData {
  products: ProductProps[];
  changeProducts: (products: ProductProps[]) => void;
  findProduct: (id: number) => ProductProps[];
  uniqueProducts: () => ProductProps[];
}

interface CartProviderProps {
  children: ReactNode;
}

interface ProductProps {
  id: number;
  name: string;
  value: string;
  size?: string;
  quantity: number;
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

  function uniqueProducts() {
    const map = new Map();
    var IdProducts = [];
    var allUniqueProducts = [];

    products.map((product) => {
      IdProducts.push(product.id);
    });

    IdProducts.map((element) => {
      map.set(element, (map.get(element) || 0) + 1);
    });

    for (const [entry, count] of map.entries()) {
      var allProducts = products.slice();

      var uniqueProduct = allProducts.find((product) => {
        return product.id == entry;
      });

      allUniqueProducts.push({
        id: uniqueProduct.id,
        name: uniqueProduct.name,
        value: uniqueProduct.value,
        size: uniqueProduct.size,
        promotion: uniqueProduct.promotion,
        image: uniqueProduct.image,
        quantity: count,
      });
    }

    return allUniqueProducts;
  }

  function findProduct(id) {
    return products.filter((product) => product.id === id);
  }

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
        findProduct,
        uniqueProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
