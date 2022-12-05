
import '../../styles/design_tokens.css';
import Header from '../../components/Header/Header';
import DonationForm from '../../components/Donation/DonationForm';
import DonationReason from '../../components/Donation/DonationReason';
import styles from '../../components/Donation/Donation.module.css';
import Navigation from "../../components/Navigation/Navigation";
import Footer from '../../components/Footer/Footer';

const DonationPage = () => {
	
  return (
		<>
			<Header />
			<Navigation path="/donation" name="Пожертвовать" />
			<section className={styles.donate}>
				<h2 className={styles.donate__title}>Сделать пожертвование детям</h2>
				<DonationReason />
				<DonationForm />
			</section>
			<Footer />
		</>
  );
};

export default DonationPage;