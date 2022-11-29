import DonateForm from '../../components/Donate/DonateForm';
import DonateReason from '../../components/Donate/DonateReason';
import styles from '../../components/Donate/Donate.module.css';

const Donate = () => {
	
  return (
    <section className={styles.donate}>
			<h2 className={styles.donate__title}>Сделать пожертвование детям</h2>
			<DonateReason />
			<DonateForm />
		</section>
  );
};

export default Donate