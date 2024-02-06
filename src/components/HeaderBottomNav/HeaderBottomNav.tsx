import React, { useContext } from 'react';
import styles from './HeaderBottomNav.module.scss';
import { MainContext } from '../../context/MainContext';

type Props = {
  isInsideBurger?: boolean;
};

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

export const HeaderBottomNav: React.FC<Props> = ({
  isInsideBurger = false,
}) => {
  const { isDarkMode } = useContext(MainContext);

  return (
    <ul className={styles.headerBottomList}>
      {navigation.map((nav, i) => (
        <li key={i} className={styles.headerBottomItem}>
          <a
            href='#'
            className={styles.headerBottomLink}
            data-theme={isDarkMode ? 'dark' : 'light'}
            data-inside={isInsideBurger ? true : null}
          >
            {nav}
          </a>
        </li>
      ))}
    </ul>
  );
};
