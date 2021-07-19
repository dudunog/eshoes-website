import { ReactNode } from "react";
import styles from "./styles.module.scss";

type CardInfoProps = {
  children: ReactNode;
};

export default function CardInfo({ children }: CardInfoProps) {
  return (
    <>
      <div className={styles.cardInfo}>{children}</div>
    </>
  );
}
