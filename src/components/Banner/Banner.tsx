import styles from './Banner.module.scss';

import game from '../../assets/images/game.png';
import burger from '../../assets/icons/burger-gray.png';

import rating from '../../assets/images/rating.png';

import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { BannerNav } from '../BannerNav';

export const Banner = () => {
  const isDekstop = useMediaQuery({ minWidth: 1024 });

  const { onToggleBanner, isBannerOpen, isDarkMode } = useContext(MainContext);

  const handleToggleBanner = () => {
    onToggleBanner();
  };

  return (
    <div
      className={styles.background}
      data-theme={isDarkMode ? 'dark' : 'light'}
    >
      <div className='container' style={{ marginBottom: '15px' }}>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <img className={styles.gamePhoto} src={game} alt='game' />
            {isDekstop ? (
              <div></div>
            ) : (
              <h2 className={styles.gameTitle}>Lorem Ipsum is simply dummy</h2>
            )}
          </div>

          {isDekstop && (
            <div className={styles.playersInfo}>
              <img src={rating} alt='people-rating' />

              <div className={styles.playersInfoDetails}>
                <h2 className={styles.playerTitle}>Players</h2>
                <h3 className={styles.playersVote}>12 votes</h3>
                <h5 className={styles.playerRating}>
                  Your rating:{' '}
                  <span className={styles.playerRatingItem}>5.2</span>
                </h5>
              </div>
            </div>
          )}
        </div>

        {!isDekstop ? (
          <>
            <div
              className={styles.bannerMore}
              style={{ marginBottom: isBannerOpen ? '15px' : 0 }}
            >
              <h4 className={styles.moreText}>More info</h4>
              <img
                src={burger}
                alt='burger'
                className={styles.burger}
                onClick={handleToggleBanner}
              />
            </div>
            {isBannerOpen && <BannerNav />}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
