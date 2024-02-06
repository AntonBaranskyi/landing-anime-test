import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { FooterCopyright } from '../FooterCopyright';
import { FooterNav } from '../FooterNav';
import { FooterTop } from '../FooterTop';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { isDarkMode } = useContext(MainContext);

  return (
    <div className={styles.background}>
      <div
        className={styles.content}
        data-theme={isDarkMode ? 'dark' : 'light'}
      >
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
    </div>
  );
};
