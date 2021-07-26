import dynamic from "next/dynamic";

import FirstHeader from "../components/FirstHeader";
import ClientsComponent from "../components/Clients";
import Footer from "../components/Footer";

import { Toaster } from "react-hot-toast";

import styles from "./People.module.scss";

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

export default function Clients() {
  return (
    <DynamicCartContextWithNoSSR>
      <DynamicClientsContextWithNoSSR>
        <header>
          <FirstHeader />
        </header>
        <main>
          <ClientsComponent />

          <Footer />
        </main>

        <Toaster
          position="top-center"
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#fff",
              color: "#363636",
            },
            success: {
              duration: 3000,
            },
          }}
        />
      </DynamicClientsContextWithNoSSR>
    </DynamicCartContextWithNoSSR>
  );
}
