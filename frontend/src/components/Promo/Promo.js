import './Promo.css';
import photo1 from '../../images/photo1.png';
import photo2 from '../../images/photo2.png';
import photo3 from '../../images/photo3.png';
import heart from '../../images/heart.png';
import { Link } from 'react-router-dom';



function Promo() {
    return (
        <div className='promo'>
            <h1 className='promo__title'>Мы занимаемся помощью людям с ментальными нарушениями. Каждый человек -
                <img  src={photo1} alt='Фото 1' className='promo__image' />
                <img  src={photo2} alt='Фото 2' className='promo__image' />
                <img  src={photo3} alt='Фото 3' className='promo__image' />
            особенный</h1>
            <p className='promo__subtitle'>Lorem ipsum dolor sit amet consectetur. Massa sit a malesuada venenatis 
            lacinia. Viverra id leo viverra egestas purus. Gravida fermentum vitae sagittis sapien consectetur pellentesque.</p>
            <div className='promo__links'>
                <Link to='/aboutus' className='promo__about-us'>О нашем проекте</Link>
                <Link to='/donation' className='promo__donation'>Сделать пожертвование 
                    <img src={heart} alt='Сердечко' className='promo__little-img' />
                </Link>
            </div>

        </div>
    )
}

export default Promo;