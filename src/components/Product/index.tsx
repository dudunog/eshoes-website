import Image from "next/image";
import styles from "./styles.module.scss";

type ProductProps = {
  name: string;
  value: string;
  size: string;
  promotion: number;
  image: string;
};

export default function Product({
  name,
  value,
  promotion,
  image,
}: ProductProps) {
  return (
    <>
      <div className={styles.card}>
        <picture>
          <Image
            width={350}
            height={350}
            src={image}
            layout="fixed"
            alt={"shoes"}
          />
          <span>
            <strong>{promotion}%</strong>
            <br /> off
          </span>
        </picture>

        <div className={styles.description}>
          <h4>{name}</h4>

          <div className={styles.value}>
            {/* <h4>De R$20.00</h4> */}
            <h3>Por R${value}</h3>
          </div>

          <div className={styles.sell}>
            <span>Vendidos: 29</span>
            <span>Disponíveis: 12</span>
          </div>
        </div>
      </div>
    </>
  );
}
