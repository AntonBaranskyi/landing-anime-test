import styles from './CardList.module.scss';
import { Card } from '../Card';

export const CardList = () => {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.listExtraInfo}>
        <h2 className={styles.listText}>Similar articles</h2>
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
