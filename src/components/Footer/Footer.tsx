import { FooterCopyright } from '../FooterCopyright';
import { FooterNav } from '../FooterNav';
import { FooterTop } from '../FooterTop';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.content}>
      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <div className={styles.grid}>
            <FooterTop />
            <FooterNav />
            <FooterCopyright />
          </div>
        </div>
      </footer>
    </div>
  );
};
