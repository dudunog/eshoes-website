import { useContext } from "react";
import Image from "next/image";

import { CartContext } from "../../contexts/CartContext";

import styles from "./styles.module.scss";

export default function Cart() {
  const { products } = useContext(CartContext);

  var totalProducts = 0;
  var totalValueProducts = 0;

  products.map((product) => {
    totalProducts += product.quantity;

    let ValueProduct = Number.parseFloat(product.value.replace(",", "."));
    totalValueProducts += ValueProduct * product.quantity;
  });

  function decreaseQuantity(id: number) {}

  function increaseQuantity(id: number) {}

  return (
    <>
      <div className={styles.cartsContainer}>
        <div>
          <h1>Carrinho de compras</h1>
        </div>

        <div className={styles.separator}></div>

        {products.map((product) => {
          return (
            <>
              <div className={styles.cartContainer}>
                <div>
                  <Image
                    width={200}
                    height={200}
                    src={product.image}
                    title={product.name}
                    alt={product.name}
                  />
                </div>

                <div className={styles.description}>
                  <div>
                    <h1>{product.name}</h1>
                    <p>{product.size}</p>

                    <div className={styles.quantity}>
                      <label htmlFor="quantity">Qtd: </label>

                      <div className={styles.changeQuantity}>
                        <button onClick={() => decreaseQuantity(product.id)}>
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                          size={1}
                          value={product.quantity}
                          readOnly
                        />
                        <button onClick={() => increaseQuantity(product.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.sell}>
                    <div>
                      <span>Vendidos: 29</span>
                      <span>Disponíveis: 12</span>
                    </div>

                    <h3>Por R$ {product.value}</h3>
                  </div>
                </div>
              </div>
              <div className={styles.separator}></div>
            </>
          );
        })}
      </div>

      <div className={styles.cartDescription}>
        <p>
          Quantidade: <strong>{totalProducts}</strong>
        </p>
        <p>
          Valor total: <strong>R$ {totalValueProducts}</strong>
        </p>
      </div>
    </>
  );
}
