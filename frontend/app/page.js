import  "../styles/Home.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import Programs from "../components/Programs/Programs";
import Partners from "../components/Partners/Partners";
import Questions from "../components/Questions/Questions";
function Page() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Programs />
      <Questions />
      <Partners />
      <Footer />
    </div>
  );
}

export default Page;
