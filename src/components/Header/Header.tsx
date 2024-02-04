import styles from './Header.module.scss';

import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import insta from '../../assets/icons/insta.png';
import google from '../../assets/icons/google.png';
import wifi from '../../assets/icons/wifi.png';

import phone from '../../assets/icons/phone.png';
import filter from '../../assets/icons/filter.png';
import android from '../../assets/icons/android.png';

import { ThemeToggler } from '../ThemeToggler';
import { HeaderBottom } from '../HeaderBottom';

const socialIcons = [
  { source: facebook, alt: 'facebook' },
  { source: twitter, alt: 'twitter' },
  { source: insta, alt: 'insta' },
  { source: google, alt: 'google' },
  { source: wifi, alt: 'wifi' },
];

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

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={`${styles.content} container`}>
          <ul className={styles.menu}>
            {menuItems.map((menuItem) => (
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
          <div className={styles.socials}>
            {socialIcons.map((icon) => (
              <a key={icon.alt} href='#' className={styles.socialLink}>
                <img src={icon.source} alt={icon.alt} className='icon' />
              </a>
            ))}
          </div>

          <ThemeToggler />
        </div>
      </div>

      <HeaderBottom />
    </header>
  );
};
