import { createContext, useContext } from "react";

export type TypeProvider = "google" | "github";

export type IRegisterData = {
  name: string;
  age: number;
  profession: string;
  email: string;
  phone: string;
  createdAt: string;
  id?: number;
};

const AppContext = createContext<IRegisterData[]>([]);

export { AppContext };
