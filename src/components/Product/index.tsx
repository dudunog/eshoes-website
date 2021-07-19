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
          <img src={image} />
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
            <span>Sold: 29</span>
            <span>Available: 12</span>
          </div>
        </div>
      </div>
    </>
  );
}
