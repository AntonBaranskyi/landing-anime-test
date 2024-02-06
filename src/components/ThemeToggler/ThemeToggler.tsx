import styles from './ThemeToggler.module.scss';

import lightToggler from '../../assets/icons/lightToggler.png';
import darkToggler from '../../assets/icons/darkToggler.png';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

export const ThemeToggler = () => {
  const { onTogglerDarkMode, isDarkMode } = useContext(MainContext);

  const handleToggleDarkMode = () => {
    onTogglerDarkMode();
  };

  return (
    <div
      className={styles.themeToggler}
      onClick={handleToggleDarkMode}
      data-theme={isDarkMode ? 'dark' : 'light'}
    >
      <img
        src={isDarkMode ? darkToggler : lightToggler}
        alt='toggler'
        className={styles.toggler}
      />
    </div>
  );
};
