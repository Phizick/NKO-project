import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import donateFormImg from '../../images/donate__form.jpg';
import DonateRadioButton from './DonateRadioButton';

const DonateForm = () => {
	const [onceDonation, setOnceDonation] = useState(true);
	const [anonimus, setAnonimus] = useState(false);
	const [donateAmount, setDonateAmount] = useState('');
	const { pathname } = useLocation();
	const donationMonthlyHandler = () => {
		setOnceDonation(false);
	}
	const donationOnceHandler = () => {
		setOnceDonation(true);
	}
	const donateHandler = (num) => {
		setDonateAmount(num);
	}
	const handleAnonimus = () => {
		setAnonimus(!anonimus);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
	}
	return (
		<div className={`donate__container${
			pathname === '/' ? ' donate__container_page_root' : ''
		}`}>
		<form onSubmit={handleSubmit} className="donate__form">
				<div className="donate__form-switchers">
					<button type="button" className={`donate__form-switcher${
						onceDonation ? ' donate__form-switcher_type_active' : ''}`}
						onClick={donationOnceHandler}
					>
						Ежемесячная поддержка
					</button>
					<button type="button" className={`donate__form-switcher${
						!onceDonation ? ' donate__form-switcher_type_active' : ''}`}
						onClick={donationMonthlyHandler}
						>
							Разовая поддержка
					</button>
				</div>
				<img src={donateFormImg} className="donate__form-image" alt="счастливые молодой парень и мужчина смотрят друг другу в глаза" />
				<span className="donate__form-title">Выберите сумму пожертвования:</span>
				<div className="donate__donation-container">
					<DonateRadioButton value={50} onChange={donateHandler} donateAmount={donateAmount} />
					<DonateRadioButton value={100} onChange={donateHandler} donateAmount={donateAmount} />
					<DonateRadioButton value={250} onChange={donateHandler} donateAmount={donateAmount} /></div>
				<div className={`donate__donation-container${onceDonation ? '' : ' donate__form-element_type_hidden'}`}>
					<DonateRadioButton value={500} onChange={donateHandler} donateAmount={donateAmount} />
					<DonateRadioButton value={1000} onChange={donateHandler} donateAmount={donateAmount} />
					<DonateRadioButton value={5000} onChange={donateHandler} donateAmount={donateAmount} />
				</div>
				<label htmlFor="donate" className={`donate__form-label${
						!onceDonation ? '' : ' donate__form-element_type_hidden'}`}>
					<span className="donate__form-span">Введите собственную сумму пожертвования:</span>
					<input type="number" name="donate" id="donate" placeholder="1000₽"
						className="donate__form-input" onChange={(e) => donateHandler(e.target.value)} value={donateAmount} />
					</label>
				<label htmlFor="anonim" className="donate__form-label">
					<span className="donate__form-span">Анонимное пожертвование</span>
					<input type="checkbox" name="anonim" id="anonim" className="donate__form-checkbox" onChange={handleAnonimus} checked={anonimus}/>
				</label>
				<button type="submit" className="donate__form-submit">Сделать пожертвование</button>
				<span className="donate__form-offer">Продолжая вы соглашаетесь с <a href="/#" className="donate__form-link">офертой</a></span>
			</form>
		</div>
	);
}
export default DonateForm;