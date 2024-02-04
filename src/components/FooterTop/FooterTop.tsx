import styles from './FooterTop.module.scss';

import facebook from '../../assets/icons/green/facebook.png';
import twitter from '../../assets/icons/green/twitter.png';
import inst from '../../assets/icons/green/inst.png';
import youtube from '../../assets/icons/green/youtube.png';
import googl from '../../assets/icons/green/googl.png';
import wifi from '../../assets/icons/green/wifi.png';

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

export const FooterTop = () => {
  return (
    <div className={styles.footerTop}>
      <h2 className={styles.footerTopTitle}>LOGOTYPE</h2>
      <p className={styles.footerTopText}>
        <span className={styles.footerTextMain}>
          Lorem Ipsum is simply dummy
        </span>
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five
      </p>

      <div className={styles.socialWrapper}>
        {socialData.map((social) => (
          <a key={social.title} href={social.href}>
            <img src={social.icon} alt={social.title} />
          </a>
        ))}
      </div>
    </div>
  );
};
