import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <Link href="/" passHref>
          <a>
            <span>E</span> shoes
          </a>
        </Link>

        <p>
          Acreditamos que cada dia é uma nova oportunidade <br /> de sair e de
          se movimentar
        </p>

        <hr />

        <p>All rights reserved</p>
      </div>
    </div>
  );
}
