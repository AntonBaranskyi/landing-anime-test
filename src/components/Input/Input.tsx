import styles from './Input.module.scss';
import search from '../../assets/icons/search.png';

export const Input = () => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type='text'
        placeholder='Search for...'
        className={styles.headerInput}
      />
      <img src={search} alt='search' className={styles.inputSearch} />
    </div>
  );
};
