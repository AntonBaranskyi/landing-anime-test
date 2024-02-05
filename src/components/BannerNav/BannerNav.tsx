import React from 'react';

import styles from './BannerNav.module.scss';

const bannerNavData = ['Lorem Ipsum is simply dummy', 'Item', 'Item', 'Item'];

export const BannerNav = () => {
  return (
    <ul className={styles.bannerMenu}>
      {bannerNavData.map((navTitle, i) => (
        <li key={i} className={styles.bannerList}>
          <a className={styles.bannerLink} href='#'>
            {navTitle}
          </a>
        </li>
      ))}
    </ul>
  );
};
