import styles from './AsideSocial.module.scss';

import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import tg from '../../assets/images/tg.png';
import pinterest from '../../assets/images/pinterest.png';
import redit from '../../assets/images/redit.png';
import like from '../../assets/images/like.png';

const images = [facebook, twitter, tg, pinterest, redit, like];

export const AsideSocial = () => {
  return (
    <div className={styles.asideSocial}>
      {images.map((image) => (
        <img
          src={image}
          alt='social'
          key={image}
          className={styles.socialImage}
        />
      ))}
    </div>
  );
};
