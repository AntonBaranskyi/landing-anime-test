import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import styles from './BreadCrumbs.module.scss';

export const BreadCrumbs = () => {
  const { isDarkMode } = useContext(MainContext);

  return (
    <p className={styles.breadCrumb} data-theme={isDarkMode ? 'dark' : 'light'}>
      Home &gt; Lorem Ipsum is &gt; <span>Lorem Ipsum is simply dummy</span>
    </p>
  );
};
