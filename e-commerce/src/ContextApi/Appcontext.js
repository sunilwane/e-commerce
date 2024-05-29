import { createContext } from "react";

export const ContextApi = createContext();

export default function ContextProvider(props) {
  const localstoragevalue = JSON.parse(localStorage.getItem("tokenno"));
  return (
    <ContextApi.Provider value={{ localstoragevalue }}>
      {props.children}
    </ContextApi.Provider>
  );
}
