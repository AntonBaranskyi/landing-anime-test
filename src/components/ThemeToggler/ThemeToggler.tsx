import styles from './ThemeToggler.module.scss';

import lightToggler from '../../assets/icons/lightToggler.png';

export const ThemeToggler = () => {
  return (
    <div className={styles.themeToggler}>
      <img src={lightToggler} alt='light' className={styles.toggler} />
    </div>
  );
};
