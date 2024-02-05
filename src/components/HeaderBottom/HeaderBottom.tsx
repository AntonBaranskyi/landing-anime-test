import logo from '../../assets/images/logo.png';
import burger from '../../assets/icons/burger.png';

import styles from './HeaderBottom.module.scss';
import { useMediaQuery } from 'react-responsive';

import close from '../../assets/icons/close.png';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { Input } from '../Input';
import { HeaderBottomNav } from '../HeaderBottomNav';

export const HeaderBottom = () => {
  const isDekstop = useMediaQuery({ minWidth: 1024 });

  const { onToggleBurger, isBurgerOpen } = useContext(MainContext);

  const handleBurgerOpen = () => {
    onToggleBurger(true);
  };

  const handleBurgerClose = () => {
    onToggleBurger(false);
  };

  return (
    <div className={styles.headerBottom}>
      <div className={`${styles.headerBottomContent} container`}>
        <div className={styles.headerBottomDesk}>
          <img src={logo} alt='logo' className={styles.logo} />

          {isDekstop && <HeaderBottomNav />}
        </div>
        {isDekstop ? (
          <Input />
        ) : isBurgerOpen ? (
          <img src={close} alt='close' onClick={handleBurgerClose} />
        ) : (
          <img src={burger} alt='burger' onClick={handleBurgerOpen} />
        )}
      </div>
    </div>
  );
};
