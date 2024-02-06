import styles from './Input.module.scss';
import search from '../../assets/icons/search.png';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

export const Input = () => {
  const { isDarkMode } = useContext(MainContext);

  return (
    <div className={styles.inputWrapper}>
      <input
        type='text'
        placeholder='Search for...'
        className={styles.headerInput}
        data-theme={isDarkMode ? 'dark' : 'light'}
      />
      <img src={search} alt='search' className={styles.inputSearch} />
    </div>
  );
};
