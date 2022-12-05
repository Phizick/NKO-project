import Link from 'next/link';
import Image from 'next/Image';
import navArrow from '../../images/nav__arrow.svg';
import styles from './Navigation.module.css';

const Navigation = ({ path, name }) => {
	return (
		<nav className={styles.nav}>
			<Link href={path} className={styles.nav__link}>Главная</Link>
			<Image src={navArrow} alt="стрелка в право" className={styles.nav__arrow}/>
			<Link href={path} className={styles.nav__link + ' ' + styles.nav__link_type_current}>{name}</Link>
		</nav>
	);
}
export default Navigation;