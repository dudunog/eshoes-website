import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

interface ClientsContextData {
  clients: ClientProps[];
  changeClients: (clients: ClientProps[]) => void;
}

interface ClientsProviderProps {
  children: ReactNode;
}

interface ClientProps {
  id: number;
  name: string;
  email: string;
  CPF: string;
  address: string;
}

export const ClientsContext = createContext({} as ClientsContextData);

export function ClientsProvider({ children }: ClientsProviderProps) {
  const [clients, setClients] = useState(() => {
    var storageProducts = localStorage.getItem("eshoes:clients");
    if (storageProducts) {
      return JSON.parse(storageProducts);
    } else {
      return [];
    }
  });

  function changeClients(clients) {
    setClients(clients);
  }

  useEffect(() => {
    localStorage.setItem("eshoes:clients", JSON.stringify(clients));
  }, [clients]);

  return (
    <ClientsContext.Provider
      value={{
        clients,
        changeClients,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
}
