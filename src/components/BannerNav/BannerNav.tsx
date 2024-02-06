import { useMediaQuery } from 'react-responsive';
import styles from './BannerNav.module.scss';

const bannerNavData = ['Lorem Ipsum is simply dummy', 'Item', 'Item', 'Item'];

export const BannerNav = () => {
  const isDekstop = useMediaQuery({ minWidth: 1024 });

  return (
    <ul className={styles.bannerMenu}>
      {bannerNavData.map((navTitle, i) =>
        isDekstop ? (
          <li key={i} className={styles.bannerList}>
            <a className={styles.bannerDeskLink} href='#'>
              {navTitle}
            </a>
          </li>
        ) : (
          <li key={i} className={styles.bannerList}>
            <a className={styles.bannerLink} href='#'>
              {navTitle}
            </a>
          </li>
        )
      )}
    </ul>
  );
};
