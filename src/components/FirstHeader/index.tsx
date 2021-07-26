import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { CartContext } from "../../contexts/CartContext";

import people from "./../../../public/people.svg";
import favoriteItemsImg from "./../../../public/favorite.svg";
import bagImg from "./../../../public/bag.svg";

import styles from "./styles.module.scss";
import { ClientsContext } from "../../contexts/ClientsContext";

export default function FirstHeader() {
  const { products } = useContext(CartContext);
  const { clients } = useContext(ClientsContext);

  return (
    <div className={styles.firstHeader}>
      <div>
        <Link href="/" passHref>
          <a>
            <span>E</span> shoes
          </a>
        </Link>

        <div>
          <Link href="/Clients">
            <a>
              <Image
                src={people}
                width={30}
                height={35}
                title="Clientes"
                alt="Clientes"
              />
              <span>{clients.length}</span>
            </a>
          </Link>
          <Link href="">
            <a>
              <Image
                src={favoriteItemsImg}
                width={30}
                height={35}
                title="Itens favoritos"
                alt="Itens favoritos"
              />
              <span>0</span>
            </a>
          </Link>
          <Link href="/Cart" passHref>
            <a>
              <Image
                src={bagImg}
                width={30}
                height={35}
                title="Carrinho"
                alt="Carrinho"
              />
              <span>{products.length}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
