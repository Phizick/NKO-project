"use client"
import Image from 'next/image';
import { useState } from 'react';
import donateFormImg from '../../images/donate__form.jpg';
import DonationRadioButton from './DonationRadioButton';
import DonationButton from './DonationButton';
import styles from './Donation.module.css';

const DonationForm = ({ root }) => {
	const [onceDonation, setOnceDonation] = useState(true);
	const [anonimus, setAnonimus] = useState(false);
	const [donateAmount, setDonationAmount] = useState('');
	const donationMonthlyHandler = () => {
		setOnceDonation(false);
	}
	const donationOnceHandler = () => {
		setOnceDonation(true);
	}
	const donateHandler = (num) => {
		setDonationAmount(num);
	}
	const handleAnonimus = () => {
		setAnonimus(!anonimus);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
	}
	return (
		<div className={styles.donate__container + (root ? ' ' + styles.donate__container_page_root : '')}>
		<form onSubmit={handleSubmit} className={styles.donate__form}>
				<div className={styles.donate__formSwitchers}>
					<button type="button" 
						className={styles.donate__formSwitcher + (onceDonation ? ' ' + styles.donate__formSwitcher_type_active : '')}
						onClick={donationOnceHandler}
					>
						Ежемесячная поддержка
					</button>
					<button type="button" 
						className={styles.donate__formSwitcher + (!onceDonation ? ' ' + styles.donate__formSwitcher_type_active : '')}
						onClick={donationMonthlyHandler}
					>
							Разовая поддержка
					</button>
				</div>
				<Image src={donateFormImg} className={styles.donate__formImage} width='368' height='420' alt="счастливые молодой парень и мужчина смотрят друг другу в глаза" />
				<span className={styles.donate__formTitle}>Выберите сумму пожертвования:</span>
				<div className={styles.donate__donationContainer}>
					<DonationRadioButton value={50} onChange={donateHandler} donateAmount={donateAmount} />
					<DonationRadioButton value={100} onChange={donateHandler} donateAmount={donateAmount} />
					<DonationRadioButton value={250} onChange={donateHandler} donateAmount={donateAmount} /></div>
				<div className={styles.donate__donationContainer + (onceDonation ? '' : ' ' + styles.donate__formElement_type_hidden)}>
					<DonationRadioButton value={500} onChange={donateHandler} donateAmount={donateAmount} />
					<DonationRadioButton value={1000} onChange={donateHandler} donateAmount={donateAmount} />
					<DonationRadioButton value={5000} onChange={donateHandler} donateAmount={donateAmount} />
				</div>
				<label htmlFor="donate" className={styles.donate__formLabel	+ (!onceDonation ? '' : ' ' + styles.donate__formElement_type_hidden)}>
					<span className={styles.donate__formSpan}>Введите собственную сумму пожертвования:</span>
					<input type="number" name="donate" id="donate" placeholder="1000₽"
						className={styles.donate__formInput} onChange={(e) => donateHandler(e.target.value)} value={donateAmount} />
					</label>
				<label htmlFor="anonim" className={styles.donate__formLabel}>
					<span className={styles.donate__formSpan + ' ' + styles.donate__formSpan_type_anonim}>Анонимное пожертвование</span>
					<input type="checkbox" name="anonim" id="anonim" className={styles.donate__formCheckbox} onChange={handleAnonimus} checked={anonimus}/>
				</label>
				<DonationButton type="submit" className={styles.donate__formSubmit} text="Сделать пожертвование" />
				<span className={styles.donate__formOffer}>Продолжая вы соглашаетесь с <a href="/#" className={styles.donate__formLink}>офертой</a></span>
			</form>
		</div>
	);
}
export default DonationForm;