import Image from "next/image";
import styles from "./styles.module.scss";

export default function Section() {
  return (
    <div className={styles.section}>
      <div>
        <Image
          width={751}
          height={501}
          src={
            "https://images.unsplash.com/photo-1581888748626-2a3f240a6f9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          }
          alt={"shoes"}
        />
        <div className={styles.description}>
          <h1>30% OFF</h1>
          <span>De 25 de Junho a 1 de Agosto</span>
        </div>
      </div>
    </div>
  );
}
