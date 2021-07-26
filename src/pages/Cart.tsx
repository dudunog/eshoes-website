import dynamic from "next/dynamic";
import FirstHeader from "../components/FirstHeader";
import CartComponent from "../components/Cart";

import styles from "../styles/Home.module.scss";

const DynamicCartContextWithNoSSR = dynamic(
  () => import("../contexts/CartContext").then((mod) => mod.CartProvider),
  {
    ssr: false,
  }
);

export default function Cart() {
  return (
    <DynamicCartContextWithNoSSR>
      <header>
        <FirstHeader />
      </header>
      <main>
        <CartComponent />
      </main>
    </DynamicCartContextWithNoSSR>
  );
}
