import { createRoot } from "react-dom/client";
import { MainPage } from "./MainPage";
import "./styles/_vars.scss";
import "./styles/normalize.scss";

createRoot(document.getElementById("root")).render(
  <MainPage/>
);
