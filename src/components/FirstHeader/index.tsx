import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { CartContext } from "../../contexts/CartContext";

import favoriteItemsImg from "./../../../public/favorite.svg";
import bagImg from "./../../../public/bag.svg";

import styles from "./styles.module.scss";

export default function FirstHeader() {
  const { products } = useContext(CartContext);

  return (
    <div className={styles.firstHeader}>
      <div>
        <Link href="/" passHref>
          <a>
            <span>E</span> shoes
          </a>
        </Link>

        <div>
          <a href="">
            <Image
              src={favoriteItemsImg}
              width={30}
              height={35}
              alt="Itens favoritos"
            />
            <span>0</span>
          </a>
          <Link href="/Cart" passHref>
            <a>
              <Image src={bagImg} width={30} height={35} alt="Carrinho" />
              <span>{products.length}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
