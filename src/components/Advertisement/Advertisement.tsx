import ads from '../../assets/images/ADS.png';

import styles from './Advertisement.module.scss';

export const Advertisement = () => {
  return (
    <div className={styles.advertisement}>
      <img src={ads} alt='ads' />
    </div>
  );
};
