import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <div>
          <Link href="/" passHref>
            <a>
              <span>E</span> shoes
            </a>
          </Link>
        </div>

        <p>
          Acreditamos que cada dia é uma nova oportunidade de sair e de se
          movimentar
        </p>

        <hr />

        <p>All rights reserved</p>
      </div>
    </div>
  );
}
