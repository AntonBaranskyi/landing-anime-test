import styles from './Header.module.scss';

import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import insta from '../../assets/icons/insta.png';
import google from '../../assets/icons/google.png';
import wifi from '../../assets/icons/wifi.png';

import { ThemeToggler } from '../ThemeToggler';
import { HeaderBottom } from '../HeaderBottom';
import { HeaderNav } from '../HeaderNav';
import { useMediaQuery } from 'react-responsive';

const socialIcons = [
  { source: facebook, alt: 'facebook' },
  { source: twitter, alt: 'twitter' },
  { source: insta, alt: 'insta' },
  { source: google, alt: 'google' },
  { source: wifi, alt: 'wifi' },
];

export const Header = () => {
  const isTablet = useMediaQuery({ minWidth: 650 });

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={`${styles.content} container`}>
          {isTablet && <HeaderNav />}
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
