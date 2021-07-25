import { useContext } from "react";
import Image from "next/image";

import { CartContext } from "../../contexts/CartContext";

import toast from "react-hot-toast";

import styles from "./styles.module.scss";

type ProductProps = {
  id: number;
  name: string;
  value: string;
  size?: string;
  promotion: number;
  image: string;
};

export default function Product({
  id,
  name,
  value,
  promotion,
  image,
}: ProductProps) {
  const { products, changeProducts } = useContext(CartContext);

  const addedToCart = () => {
    toast.success("Produto adicionado ao carrinho!");
  };

  function saveProduct() {
    let newProducts = products.slice();

    newProducts.push({
      id,
      name,
      value,
      promotion,
      image,
    });

    changeProducts(newProducts);
    addedToCart();
  }

  return (
    <>
      <div className={styles.card}>
        <picture>
          <Image
            width={250}
            height={250}
            src={image}
            layout="responsive"
            alt={"shoes"}
          />
          <span>
            <strong>{promotion}%</strong> off
          </span>
        </picture>

        <div className={styles.description}>
          <h4>{name}</h4>

          <div className={styles.value}>
            <h3>Por R${value}</h3>
          </div>

          <div className={styles.sell}>
            <span>Vendidos: 29</span>
            <span>Disponíveis: 12</span>
          </div>

          <button className={styles.button} onClick={saveProduct}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
}
