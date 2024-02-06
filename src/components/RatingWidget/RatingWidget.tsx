import { useContext, useState } from 'react';
import styles from './RatingWidget.module.scss';
import { MainContext } from '../../context/MainContext';

import cx from 'classnames';

const dataArray = ['Note', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const RatingWidget = () => {
  const { onSetUserRating, userRating, isDarkMode } = useContext(MainContext);

  const [currentRating, setCurrentRating] = useState(10 - userRating);

  const handleClickRating = (num: string | number) => {
    if (typeof num === 'number') {
      onSetUserRating(num);
      const newRating = 10 - num;
      setCurrentRating(newRating);
      document.documentElement.style.setProperty(
        '--current-rating',
        newRating.toString()
      );
    }
  };

  return (
    <div
      className={styles.ratingWrapper}
      data-theme={isDarkMode ? 'dark' : 'light'}
    >
      <div
        style={
          { '--current-rating': `${currentRating}` } as React.CSSProperties
        }
        className={cx(
          styles.ratingActiveBlock,
          currentRating === -1 ? '' : styles.active,
          userRating === 10 ? styles.rounded : null
        )}
      />
      <div className={styles.ratingList}>
        {dataArray.map((num) => (
          <div
            data-theme={isDarkMode ? 'dark' : 'light'}
            key={num}
            className={`${styles.ratingItem} ${
              typeof num === 'number' && num > userRating ? styles.active : ''
            }`}
            data-isFirst={num === 'Note' ? true : null}
            onClick={() => handleClickRating(num)}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};
