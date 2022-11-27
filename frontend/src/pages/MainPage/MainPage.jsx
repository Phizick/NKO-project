import styleMainPage from "./MainPage.module.css";

import Promo from "../../components/Promo/Promo";
import Header from "../../components/Header/Header";
import Partners from "../../components/Partners/Partners";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <h1>MainPage</h1>
            <Promo />
            <Partners />
    </div>
  );
};
