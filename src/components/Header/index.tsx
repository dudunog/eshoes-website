import Link from "next/link";
import Image from "next/image";

import Button from "../Button";

import favoriteItemsImg from "./../../../public/favorite.svg";
import bagImg from "./../../../public/bag.svg";
import menuImg from "../../../public/menu.svg";

import styles from "./styles.module.scss";

export default function Header() {
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
          </a>
          <a href="">
            <Image src={bagImg} width={30} height={35} alt="Carrinho" />
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
            <Link href="/about">Sobre nós</Link>
            <Link href="/about">Contato</Link>
          </div>

          <div>
            <Button>Comprar agora</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
