import styles from './Partners.module.css';

import sisters from '../../images/5sisters.png';
import stars from '../../images/stars.png';
import school from '../../images/961.png';
import cfksiz from '../../images/cfksiz.png';
import constellation from '../../images/constellation.png';
import downCenter from '../../images/down-center.png';



function Partners() {
    return (
        <>
            <div className={ styles.partners }>
                <h2 className={ styles.title }>Наши партнеры</h2>
                <nav className={ styles.list }>
                    <a href='https://khg-5sisters.ru/?ysclid=lay88x56cw819307569' className={ styles.item } blanck>
                        <img src={sisters} className={styles.image} alt='5 sisters' />
                    </a>
                    <a href='https://vk.com/sozvezdiesporta?ysclid=lay8alw7hp773261702' className={ styles.item } blanck>
                        <img src={stars} className={styles.image} alt='Созвездие спорта' />
                    </a>
                    <a href='http://xn--691-8cd3cgu2f.xn--p1ai/' className={ styles.item } blanck>
                        <img src={school} className={styles.image} alt='961 школа' />
                    </a>
                    <a href='http://www.cfk-mosk.ru/' className={ styles.item } blanck>
                        <img src={cfksiz} className={styles.image} alt='ЦФКСиЗ' />
                    </a>
                    <a href='https://xn--b1aeaegb2b9bweybp.xn--p1ai/' className={ styles.item } blanck>
                        <img src={constellation} className={styles.image} alt='Звёзды детям' />
                    </a>
                    <a href='https://downcenter.ru' className={ styles.item } blanck>
                        <img src={downCenter} className={styles.image} alt='Даун Центр' />
                    </a>
                </nav>

            </div>
            <p className={ styles.text }>
                К 2017 году в мире было зарегистрировано 
                    <span className={ styles.textBold }> 792&nbsp;млн </span>&nbsp;человек с ментальными заболеваниями&nbsp;— это 
                    <span className={ styles.textBold }> 10,7%&nbsp;от всего населения земного шара.</span>
            </p>

        </>
    )
}

export default Partners;