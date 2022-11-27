import styles from './Promo.module.css';
import photo1 from '../../images/photo1.png';
import photo2 from '../../images/photo2.png';
import photo3 from '../../images/photo3.png';
import heart from '../../images/heart.png';
import { Link } from 'react-router-dom';



function Promo() {
    return (
        <div className={ styles.promo }>
            <h1 className={ styles.title }>Мы занимаемся помощью людям с ментальными нарушениями. Каждый человек -
                <img  src={photo1} alt='Фото 1' className={ styles.image } />
                <img  src={photo2} alt='Фото 2' className={ styles.image } />
                <img  src={photo3} alt='Фото 3' className={ styles.image } />
            особенный</h1>
            <p className={ styles.subtitle }>Lorem ipsum dolor sit amet consectetur. Massa sit a malesuada venenatis 
            lacinia. Viverra id leo viverra egestas purus. Gravida fermentum vitae sagittis sapien consectetur pellentesque.</p>
            <div className={ styles.links }>
                <Link to='/aboutus' className={ styles.aboutUs }>О нашем проекте</Link>
                <Link to='/donation' className={ styles.donation }>Сделать пожертвование 
                    <img src={heart} alt='Сердечко' className={ styles.littleImg } />
                </Link>
            </div>

        </div>
    )
}

export default Promo;