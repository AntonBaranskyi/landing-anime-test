import styles from './BurgerMenu.module.scss';
import { Header } from '../Header';
import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

type Props = {
  children: React.ReactNode;
};

export const BurgerMenu: React.FC<Props> = ({ children }) => {
  const { isBurgerOpen } = useContext(MainContext);
  return (
    <div className={styles.menu}>
      {isBurgerOpen && <Header />}
      <div className='container'>
        <div className={styles.menuContent}>{children}</div>
      </div>
    </div>
  );
};
