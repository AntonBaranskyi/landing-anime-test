import styles from './Banner.module.scss';

import game from '../../assets/images/game.png';
import burger from '../../assets/icons/burger-gray.png';

import rating from '../../assets/images/rating.png';

import { useMediaQuery } from 'react-responsive';

export const Banner = () => {
  const isDekstop = useMediaQuery({ minWidth: 1024 });

  console.log(isDekstop);

  return (
    <div className={styles.background}>
      <div className='container'>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <img className={styles.gamePhoto} src={game} alt='game' />
            <h2 className={styles.gameTitle}>Lorem Ipsum is simply dummy</h2>
          </div>

          {isDekstop && (
            <div className={styles.playersInfo}>
              <img src={rating} alt='people-rating' />

              <div className={styles.playersInfoDetails}>
                <h2 className={styles.playerTitle}>Players</h2>
                <h3 className={styles.playersVote}>12 votes</h3>
                <h5 className={styles.playerRating}>
                  Your rating: <span className={styles.playerRatingItem}>5.2</span>
                </h5>
              </div>
            </div>
          )}
        </div>

        {!isDekstop ? (
          <div className={styles.bannerMore}>
            <h4 className={styles.moreText}>More info</h4>
            <img src={burger} alt='burger' className={styles.burger} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
