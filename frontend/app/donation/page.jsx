
import '../../styles/design_tokens.css';
import DonationForm from '../../components/Donation/DonationForm';
import DonationReason from '../../components/Donation/DonationReason';
import styles from '../../components/Donation/Donation.module.css';
import Navigation from "../../components/Navigation/Navigation";

const DonationPage = () => {
	
  return (
		<>
			<Navigation path="/donation" name="Пожертвовать" />
			<section className={styles.donate}>
				<h2 className={styles.donate__title}>Сделать пожертвование детям</h2>
				<DonationReason />
				<DonationForm />
			</section>
		</>
  );
};

export default DonationPage;