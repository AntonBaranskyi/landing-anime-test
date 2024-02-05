
import styles from './HeaderBottomNav.module.scss';

const navigation = [
  'Item',
  'Item',
  'Item',
  'Item',
  'Item',
  'Item',
  'Item',
  'Item',
];

export const HeaderBottomNav = () => {
  return (
    <ul className={styles.headerBottomList}>
      {navigation.map((nav, i) => (
        <li key={i} className={styles.headerBottomItem}>
          <a href='#' className={styles.headerBottomLink}>
            {nav}
          </a>
        </li>
      ))}
    </ul>
  );
};
