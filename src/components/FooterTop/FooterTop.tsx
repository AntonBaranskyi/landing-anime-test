import styles from './FooterTop.module.scss';

import facebook from '../../assets/icons/green/facebook.png';
import twitter from '../../assets/icons/green/twitter.png';
import inst from '../../assets/icons/green/inst.png';
import youtube from '../../assets/icons/green/youtube.png';
import googl from '../../assets/icons/green/googl.png';
import wifi from '../../assets/icons/green/wifi.png';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

import lightFacebook from '../../assets/icons/facebook.png';
import lightTwitter from '../../assets/icons/twitter.png';
import lightInsta from '../../assets/icons/insta.png';
import lightGoogle from '../../assets/icons/google.png';
import lightWifi from '../../assets/icons/wifi.png';

const socialData = [
  {
    icon: facebook,
    href: '#',
    title: 'facebook',
  },
  {
    icon: twitter,
    href: '#',
    title: 'twitter',
  },
  { icon: inst, href: '#', title: 'inst' },
  { icon: youtube, href: '#', title: 'youtube' },
  { icon: googl, href: '#', title: 'googl' },
  { icon: wifi, href: '#', title: 'wifi' },
];

const socialLightIcons = [
  { icon: lightFacebook, title: 'facebook' },
  { icon: lightTwitter, title: 'twitter' },
  { icon: lightInsta, title: 'insta' },
  { icon: lightGoogle, title: 'google' },
  { icon: lightWifi, title: 'wifi' },
];

export const FooterTop = () => {
  const { isDarkMode } = useContext(MainContext);

  const iteribleData = isDarkMode ? socialLightIcons : socialData;

  return (
    <div
      className={styles.footerTop}
      data-theme={isDarkMode ? 'dark' : 'light'}
    >
      <h2
        className={styles.footerTopTitle}
        data-theme={isDarkMode ? 'dark' : 'light'}
      >
        LOGOTYPE
      </h2>
      <p
        className={styles.footerTopText}
        data-theme={isDarkMode ? 'dark' : 'light'}
      >
        <span className={styles.footerTextMain}>
          Lorem Ipsum is simply dummy
        </span>
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five
      </p>

      <div className={styles.socialWrapper}>
        {iteribleData.map((social) => (
          <a key={social.title} href='#'>
            <img src={social.icon} alt={social.title} />
          </a>
        ))}
      </div>
    </div>
  );
};
