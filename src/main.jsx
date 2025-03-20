import { createRoot } from "react-dom/client";
import { MainPage } from "./MainPage";
import "./styles/_vars.scss";
import "./styles/normalize.scss";
import "./styles/fonts/fonts.scss";

createRoot(document.getElementById("root")).render(
  <MainPage/>
);
