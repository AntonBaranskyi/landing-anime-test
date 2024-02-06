import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { Advertisement } from '../Advertisement';
import { BreadCrumbs } from '../BreadCrumbs';
import { CardList } from '../CardList';
import { MainParagraph } from '../MainParagraph';
import styles from './Main.module.scss';

export const Main = () => {
  const { isDarkMode } = useContext(MainContext);

  return (
    <div className={styles.main} data-theme={isDarkMode ? 'dark' : 'light'}>
      <div className='container'>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <BreadCrumbs />
            <MainParagraph />
            <CardList />
          </div>

          <Advertisement />
        </div>
      </div>
    </div>
  );
};
