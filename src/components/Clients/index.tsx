import Image from "next/image";
import { useContext, useState } from "react";

import { ClientsContext } from "../../contexts/ClientsContext";

import peopleBlack from "./../../../public/peopleBlack.svg";

import toast from "react-hot-toast";

import styles from "./styles.module.scss";

export default function ClientsComponent() {
  const { clients, changeClients } = useContext(ClientsContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [address, setAddress] = useState("");

  const registered = () => {
    toast.success("Cadastro realizado!");
  };

  const error = () => {
    toast.error("Digite todas informações do cliente");
  };

  function createClient(event) {
    event.preventDefault();

    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      CPF.trim() !== "" &&
      address.trim() !== ""
    ) {
      var newClients = clients.slice();

      var newId = Math.floor(Math.random() * 100);

      while (newClients.some((client) => client.id === newId)) {
        newId = Math.floor(Math.random() * 100);
      }

      newClients.push({
        id: newId,
        name,
        email,
        CPF,
        address,
      });

      changeClients(newClients);

      registered();
    } else {
      error();
    }
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.clientsContainer}>
          <div className={styles.clientsTitle}>
            <h1>Nossos clientes</h1>
          </div>

          <div className={styles.separator}></div>

          <div>
            {clients.map((client) => {
              return (
                <>
                  <div className={styles.clientContainer}>
                    <div className={styles.clientDescription}>
                      <div>
                        <Image
                          src={peopleBlack}
                          width={30}
                          height={35}
                          title="Clientes"
                          alt="Clientes"
                        />
                        <div>
                          <p>Nome</p>
                          <h2>{client.name}</h2>
                        </div>

                        <div>
                          <p>CPF</p>
                          <h2>{client.CPF}</h2>
                        </div>

                        <div>
                          <p>Endereço</p>
                          <h2>{client.address}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.separator}></div>
                </>
              );
            })}
          </div>
        </div>

        <div className={styles.createClientContainer}>
          <div className={styles.createClientDescription}>
            <h2>Adicionar cliente</h2>
          </div>
          <div>
            <form className={styles.createClientForm} onSubmit={createClient}>
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  placeholder="Seu CPF"
                  onChange={(event) => setCPF(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Seu endereço"
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>

              <div className={styles.createClientAction}>
                <button>Adicionar cliente</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
