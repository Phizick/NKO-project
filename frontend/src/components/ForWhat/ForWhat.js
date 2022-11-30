import styles from './ForWhat.module.css';

import personal from '../../images/personal.png';
import brushes from '../../images/brushes.png';
import box from '../../images/box.png';

function ForWhat() {
    return (
        <div className={ styles.forWhat }>
            <h2 className={ styles.title }>На что нужны пожертвования</h2>
            <ul className={ styles.list }>
                <li className={ styles.item }>
                    <img src={personal} className={styles.image} alt='Персонал' />
                    <div className={styles.itemTextBlock}>
                        <h3 className={styles.itemTitle}>Зарплата персонала</h3>
                        <p className={styles.itemText}>Мы стараемся приглашать в фонд квалифицированных специалистов</p>
                    </div>
                </li>
                <li className={ styles.item }>
                    <img src={brushes} className={styles.image} alt='Инвентарь' />
                    <div className={styles.itemTextBlock}>
                        <h3 className={styles.itemTitle}>Инвентарь</h3>
                        <p className={styles.itemText}>Для проведения различных активностей требуется инвентарь.</p>
                    </div>
                </li>
                <li className={ styles.item }>
                    <img src={box} className={styles.image} alt='Логистика' />
                    <div className={styles.itemTextBlock}>
                        <h3 className={styles.itemTitle}>Логистика</h3>
                        <p className={styles.itemText}>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </li>
            </ul>
        </div>
)
}

export default ForWhat;