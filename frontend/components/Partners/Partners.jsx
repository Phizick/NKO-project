import styles from './Partners.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import api from '../../src/utils/Api';


function Partners() {
  const [partners, setPartners] = useState(null)

  useEffect(() => {
    api.getInfo('partners')
    .then(res => setPartners(res.results))
    .catch(err => console.log(err))
  }, [])

    return (
        <>
          <div className={ styles.partners }>
              <h2 className={ styles.title }>Наши партнеры</h2>
              <ul className={ styles.list }>
                {partners !== null && partners.map(partner => {
                  return(
                    <li key={partner.id} className={ styles.item }>
                      <a href={partner.partner_url}  target="_blank">
                        <Image 
                          src={partner.logo} 
                          className={styles.image} 
                          width='200'
                          height='200'
                          alt={partner.name} 
                          priority
                        />
                      </a>
                  </li>
                  )
                })}
              </ul>
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