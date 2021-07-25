import { useState } from "react";
import Button from "../Button";

import toast from "react-hot-toast";

import styles from "./styles.module.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const subcribed = () => {
    toast.success("Você se inscreveu na newsletter!");
  };

  const error = () => {
    toast.error("Digite um e-mail válido");
  };

  function setStorage() {
    if (email) {
      localStorage.setItem("newsletter:email", email);
      subcribed();
    } else {
      error();
    }
  }

  return (
    <div className={styles.newsletter}>
      <div className={styles.description}>
        <h1>Newsletter</h1>
        <span>Assine nossa newsletter e fique atualizado</span>
      </div>

      <div className={styles.action}>
        <input
          type="email"
          placeholder="Subscribe"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button onClick={setStorage}>Subscribe</Button>
      </div>
    </div>
  );
}
