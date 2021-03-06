import dynamic from "next/dynamic";

import FirstHeader from "../components/FirstHeader";
import CartComponent from "../components/Cart";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.scss";

const DynamicCartContextWithNoSSR = dynamic(
  () => import("../contexts/CartContext").then((mod) => mod.CartProvider),
  {
    ssr: false,
  }
);

const DynamicClientsContextWithNoSSR = dynamic(
  () => import("../contexts/ClientsContext").then((mod) => mod.ClientsProvider),
  {
    ssr: false,
  }
);

export default function Cart() {
  return (
    <DynamicCartContextWithNoSSR>
      <DynamicClientsContextWithNoSSR>
        <header>
          <FirstHeader />
        </header>
        <main>
          <CartComponent />

          <Footer />
        </main>
      </DynamicClientsContextWithNoSSR>
    </DynamicCartContextWithNoSSR>
  );
}
