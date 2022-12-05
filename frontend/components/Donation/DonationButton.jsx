import styles from './Donation.module.css';
const DonationButton = ({ type, className, text }) => {

	return (
		<button type={type} className={styles.donate__button + (className ? (' ' + className) : '')}>{text}</button>
	);
}
export default DonationButton;