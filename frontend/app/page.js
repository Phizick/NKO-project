import "../styles/Home.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import Programs from "../components/Programs/Programs";
import Partners from "../components/Partners/Partners";
import Questions from "../components/Questions/Questions";
import ForWhat from "../components/ForWhat/ForWhat";
import Donation from "../components/Donation/Donation";
import Gallery from "../components/Gallery/Gallery";
function Page() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Partners />
      <Programs />
      <ForWhat />
      <Donation root />
      <Questions />
      <Footer />
    </div>
  );
}

export default Page;
