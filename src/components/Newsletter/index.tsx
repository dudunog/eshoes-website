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

  function setStorage(event) {
    event.preventDefault();

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
        <form id="form" onSubmit={setStorage}>
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            autoComplete="email"
            form="form"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button type="submit">Confirmar</Button>
        </form>
      </div>
    </div>
  );
}
