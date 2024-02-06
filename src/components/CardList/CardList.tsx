import styles from './CardList.module.scss';
import { Card } from '../Card';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

export const CardList = () => {
  const { isDarkMode } = useContext(MainContext);

  return (
    <div className={styles.listWrapper}>
      <div className={styles.listExtraInfo}>
        <h2
          className={styles.listText}
          data-theme={isDarkMode ? 'dark' : 'light'}
        >
          Similar articles
        </h2>
        <div className={styles.listProgress} />
      </div>

      <div className={styles.cardList}>
        {[...new Array(4)].map((_, id) => (
          <Card key={id} />
        ))}
      </div>
    </div>
  );
};
