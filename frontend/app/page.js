import stylePage from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import Programs from "../components/Programs/Programs";
import Partners from "../components/Partners/Partners";
function Page() {
  return (
    <div className={stylePage.App}>
    <Header/>
    <Promo/>
    <Programs/>
    <Partners/>
      <Footer />
    </div>
  );
}

export default Page;
