import Image from 'next/image';
import staffImage from '../../images/donate_reason_type_staff.svg';
import logisticsImage from '../../images/donate_reason_type_logistics.svg';
import inventoryImage from '../../images/donate_reason_type_inventory.svg';
import styles from './Donation.module.css';

const DonationReason = () => {
	return (
		<div className={styles.donate__reasons}>
			<h3 className={styles.donate__reasonsTitle}>На что нужны пожертвования</h3>
			<ul className={styles.donate__reasonsList}>
					<li className={styles.donate__reason}>
						<Image className={styles.donate__reasonImage} width = '56' height='56' src={staffImage} alt="схематичное изображение человека" />
						<div className={styles.donate__text}>
							<h4 className={styles.donate__reasonTitle}>Зарплата персонала</h4>
							<p className={styles.donate__reasonDescription}>Мы стараемся приглашать в фонд квалифицированных специалистов.</p>
						</div>
					</li>
					<li className={styles.donate__reason}>
						<Image className={styles.donate__reasonImage} width = '56' height='56' src={inventoryImage} alt="схематичное изображение двух кисточек" />
						<div className={styles.donate__text}>
							<h4 className={styles.donate__reasonTitle}>Инвентарь</h4>
							<p className={styles.donate__reasonDescription}>Для проведения различных активностей требуется инвентарь.</p>
						</div>
					</li>
					<li className={styles.donate__reason}>
						<Image className={styles.donate__reasonImage} width = '56' height='56' src={logisticsImage} alt="схематичное изображение коробки" />
						<div className={styles.donate__text}>
							<h4 className={styles.donate__reasonTitle}>Логистика</h4>
							<p className={styles.donate__reasonDescription}>Для проведения различных активностей требуется инвентарь.</p>
						</div>
					</li>
				</ul>
			</div>
	);
}
export default DonationReason;