import { createBrowserRouter } from "react-router-dom";
import { Lista } from "./components/Lista";
import { ListaRQ } from "./components/ListaRQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListaRQ />,
  },
  {
    path: "/sobre",
    element: <h1>SOBRE</h1>,
  },
]);
