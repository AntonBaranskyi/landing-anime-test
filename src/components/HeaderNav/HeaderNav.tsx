import styles from './HeaderNav.module.scss';

import phone from '../../assets/icons/phone.png';
import filter from '../../assets/icons/filter.png';
import android from '../../assets/icons/android.png';

import grayPhone from '../../assets/icons/gray/phone.png';
import grayFilter from '../../assets/icons/gray/filter.png';
import grayAndroid from '../../assets/icons/gray/android.png';
import grayApple from '../../assets/icons/gray/apple.png';

import React from 'react';

type Props = {
  isInsideBurger?: boolean;
};

const menuItems = [
  {
    icon: phone,
    title: 'Menu item 1',
    href: '#',
  },
  {
    icon: filter,
    title: 'Menu item 2',
    href: '#',
  },
  {
    icon: android,
    title: 'Menu item 3',
    href: '#',
  },
];

const grayMenuItems = [
  {
    icon: grayPhone,
    title: 'Menu item 1',
    href: '#',
  },
  {
    icon: grayFilter,
    title: 'Menu item 2',
    href: '#',
  },
  {
    icon: grayAndroid,
    title: 'Menu item 3',
    href: '#',
  },
  {
    icon: grayApple,
    title: 'Menu item 4',
    href: '#',
  },
];

export const HeaderNav: React.FC<Props> = ({ isInsideBurger = false }) => {
  const iteribleValue = isInsideBurger ? grayMenuItems : menuItems;

  return (
    <ul className={isInsideBurger ? styles.burgerMenu : styles.menu}>
      {iteribleValue.map((menuItem) => (
        <li key={menuItem.title} className={styles.menuListItem}>
          <img
            src={menuItem.icon}
            alt={menuItem.title}
            className={styles.menuIcon}
          />
          <a className={styles.menuLink}> {menuItem.title}</a>
        </li>
      ))}
    </ul>
  );
};
