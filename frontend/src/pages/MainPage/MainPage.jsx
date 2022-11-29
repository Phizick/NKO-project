import styleMainPage from "./MainPage.module.css";
import Promo from "../../components/Promo/Promo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Programs from "../../components/Programs/Programs";
import Partners from "../../components/Partners/Partners";
import DonateForm from "../../components/Donate/DonateForm";
import DonateReason from "../../components/Donate/DonateReason";
import DonateStyles from '../../components/Donate/Donate.module.css';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Promo />
      <Programs/>
      <Partners />
      <section className="donate">
        <DonateReason />
        <h2 className={DonateStyles.donate__title + ' ' + DonateStyles.donate__title_type_root}>Меняй мир к лучшему с нами!</h2>
        <p className={DonateStyles.donate__paragraph}>более 1 000 человек</p>
        <p className={DonateStyles.donate__paragraph}>уже получили помощь</p>
        <DonateForm />
      </section>
      <Footer/>
    </div>
  );
};
