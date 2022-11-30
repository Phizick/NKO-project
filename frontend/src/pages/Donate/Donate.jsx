import DonateForm from '../../components/Donate/DonateForm';
import DonateReason from '../../components/Donate/DonateReason';
import styles from '../../components/Donate/Donate.module.css';
import Navigation from "../../components/Navigation/Navigation";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Donate = () => {
	
  return (
		<>
			<Header />
			<Navigation path="/donation" name="Пожертвовать" />
			<section className={styles.donate}>
				<h2 className={styles.donate__title}>Сделать пожертвование детям</h2>
				<DonateReason />
				<DonateForm />
			</section>
			<Footer />
		</>
  );
};

export default Donate