import Header from "../components/Header";
import Initial from "../components/Initial";
import CardInfo from "../components/CardInfo";
import Section from "../components/Section";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import { IoWalletOutline } from "react-icons/io5";
import { RiTruckLine } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";

const productsJson = require("../../data.json");

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Initial />

        <div className={styles.cardsContainer}>
          <CardInfo>
            <IoWalletOutline size={30} color={"#0f233c"} />
            <h2>Dinheiro de volta</h2>
          </CardInfo>
          <CardInfo>
            <IoPricetagOutline size={30} color={"#0f233c"} />
            <h2>Preços em conta</h2>
          </CardInfo>
          <CardInfo>
            <RiTruckLine size={30} color={"#0f233c"} />
            <h2>Entrega grátis</h2>
          </CardInfo>
        </div>

        <div className={styles.productsContainer}>
          <div className={styles.productsHeader}>
            <h1>Melhores ofertas semanais</h1>
            <a href="#">Ver mais</a>
          </div>

          <div className={styles.products}>
            {productsJson.products.map((product) => {
              return (
                <Product
                  key={product.id}
                  name={product.name}
                  value={product.value}
                  size={product.size}
                  promotion={product.promotion}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>

        <Section />

        <Newsletter />

        <Footer />
      </main>
    </>
  );
}
