import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import Button from "../Button";

import { CartContext } from "../../contexts/CartContext";

import favoriteItemsImg from "./../../../public/favorite.svg";
import bagImg from "./../../../public/bag.svg";
import menuImg from "../../../public/menu.svg";

import styles from "./styles.module.scss";

export default function Header() {
  const { products } = useContext(CartContext);
  const router = useRouter();

  return (
    <div className={styles.headerContainer}>
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
          <a href="">
            <Image src={bagImg} width={30} height={35} alt="Carrinho" />
            <span>{products.length}</span>
          </a>
        </div>
      </div>
      <div>
        <div>
          <div>
            <button>
              <Image src={menuImg} alt="All Categories" />
              Todas as categorias
            </button>
          </div>

          <div>
            <Link href="#about">Sobre nós</Link>
            <Link href="#about">Contato</Link>
          </div>

          <div>
            <Button onClick={() => router.push("#productsContainer")}>
              Comprar agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
