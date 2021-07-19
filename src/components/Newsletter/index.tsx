import { useState } from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function setStorage() {
    localStorage.setItem("newsletter:email", email);
  }

  return (
    <div className={styles.newsletter}>
      <div className={styles.description}>
        <h1>Newsletter</h1>
        <span>Assine nossa newsletter e fique atualizado</span>
      </div>

      <div className={styles.action}>
        <input
          type="text"
          placeholder="Subscribe"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button onClick={setStorage}>Subscribe</Button>
      </div>
    </div>
  );
}
