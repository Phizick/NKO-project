import DonationForm from "./DonationForm";
import DonationReason from "./DonationReason";
import DonationButton from "./DonationButton";
import DonationStyles from './Donation.module.css';

const Donation = ({ root }) => {
	return (
		<section className="donate">
			<DonationReason />
			<h2 className={DonationStyles.donate__title + ' ' + DonationStyles.donate__title_type_root}>Меняй мир к лучшему с нами!</h2>
			<p className={DonationStyles.donate__paragraph}>более 1 000 человек</p>
			<p className={DonationStyles.donate__paragraph}>уже получили помощь</p>
			<DonationButton type="button" text="Сделать пожертвование" />
			<DonationForm root={root}/>
		</section>
	);
}
export default Donation;