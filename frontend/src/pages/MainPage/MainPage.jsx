import styleMainPage from "./MainPage.module.css";
import Promo from "../../components/Promo/Promo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Programs from "../../components/Programs/Programs";
import Partners from "../../components/Partners/Partners";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Promo />
      <Programs/>
            <Promo />
            <Partners />
            <Footer/>
    </div>
  );
};
