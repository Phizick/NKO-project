import { Link } from "react-router-dom";
import navArrow from '../../images/nav__arrow.svg';
import styles from './Navigation.module.css';

const Navigation = ({ path, name }) => {
	return (
		<nav className={styles.nav}>
			<Link to={path} className={styles.nav__link}>Главная</Link>
			<img src={navArrow} alt="стрелка в право" className={styles.nav__arrow}/>
			<Link to={path} className={styles.nav__link + ' ' + styles.nav__link_type_current}>{name}</Link>
		</nav>
	);
}
export default Navigation;