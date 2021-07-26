import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import Button from "../Button";

import menuImg from "../../../public/menu.svg";

import styles from "./styles.module.scss";

export default function SecondHeader() {
  const router = useRouter();

  return (
    <div className={styles.secondHeader}>
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
