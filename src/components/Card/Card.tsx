import styles from './Card.module.scss';

import card from '../../assets/images/card.png';
import person from '../../assets/icons/person.png';
import clock from '../../assets/icons/clock.png';

export const Card = () => {
  return (
    <div className={styles.card}>
      <img src={card} alt='cardPhoto' className={styles.cardPhoto} />
      <h5 className={styles.cardTitle}>Lorem Ipsum is simply dummy</h5>

      <div className={styles.moreInfo}>
        <div className={styles.infoItem}>
          <img src={person} alt='person' className={styles.icon} />
          <p className={styles.infoText}>Alco</p>
        </div>

        <div className={styles.infoItem}>
          <img src={clock} alt='clock' className={styles.icon} />
          <p className={styles.infoText}>26 janvier 2023</p>
        </div>
      </div>
    </div>
  );
};
