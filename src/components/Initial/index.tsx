import { useRouter } from "next/router";
import Image from "next/image";

import Button from "../Button";

import shoesInitial from "../../../public/shoes-initials.jpg";

import styles from "./styles.module.scss";

export default function Initial() {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div>
        <Image
          src={shoesInitial}
          width={377}
          height={453}
          alt="Homem segurando um par de sapatos."
          layout="responsive"
        />
      </div>
      <div>
        <h1>TODOS OS PRODUTOS ORIGINAIS</h1>

        <p>
          Acreditamos que cada dia é uma nova oportunidade de sair e de se
          movimentar. E quando você vira um membro Nike, ganha acesso a novas
          maneiras de descobrir e se conectar ao esporte.
        </p>

        <Button onClick={() => router.push("#productsContainer")}>
          Comprar agora
        </Button>
      </div>
    </section>
  );
}
