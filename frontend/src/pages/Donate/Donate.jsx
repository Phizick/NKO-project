import DonateForm from '../../components/Donate/DonateForm';
import DonateReason from '../../components/Donate/DonateReason';
import '../../components/Donate/Donate.css'

const Donate = () => {
	
  return (
    <section className="donate">
			<h2 className="donate__title">Сделать пожертвование детям</h2>
			<DonateReason />
			<DonateForm />
		</section>
  );
};

export default Donate