import DonateForm from "../../components/Donate/DonateForm";
import DonateReason from "../../components/Donate/DonateReason";
import "./MainPage.module.css";
import DonateStyles from '../../components/Donate/Donate.module.css';

export const MainPage = () => {
  return (
    <>
      <div>
        <h1>MainPage</h1>
      </div>
      <section className="donate">
        <DonateReason />
        <h2 className={DonateStyles.donate__title + ' ' + DonateStyles.donate__title_type_root}>Меняй мир к лучшему с нами!</h2>
        <p className={DonateStyles.donate__paragraph}>более 1 000 человек</p>
        <p className={DonateStyles.donate__paragraph}>уже получили помощь</p>
        <DonateForm />
      </section>
    </>
  );
};
