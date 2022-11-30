import DonationForm from "./DonationForm";
import DonationReason from "./DonationReason";
import DonationStyles from '../../components/Donation/Donation.module.css';

const Donation = () => {
	return (
		<section className="donate">
			<DonationReason />
			<h2 className={DonationStyles.donate__title + ' ' + DonationStyles.donate__title_type_root}>Меняй мир к лучшему с нами!</h2>
			<p className={DonationStyles.donate__paragraph}>более 1 000 человек</p>
			<p className={DonationStyles.donate__paragraph}>уже получили помощь</p>
			<DonationForm />
		</section>
	);
}
export default Donation;