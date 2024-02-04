import logo from '../../assets/images/logo.png';
import burger from '../../assets/icons/burger.png';

import styles from './HeaderBottom.module.scss';
import { useMediaQuery } from 'react-responsive';

import search from '../../assets/icons/search.png';

const navigation = [
  'Item',
  'Item',
  'Item',
  'Item',
  'Item',
  'Item',
  'Item',
  'Item',
];

export const HeaderBottom = () => {
  const isDekstop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className={styles.headerBottom}>
      <div className={`${styles.headerBottomContent} container`}>
        <div className={styles.headerBottomDesk}>
          <img src={logo} alt='logo' className={styles.logo} />

          {isDekstop && (
            <ul className={styles.headerBottomList}>
              {navigation.map((nav, i) => (
                <li key={i} className={styles.headerBottomItem}>
                  <a href='#' className={styles.headerBottomLink}>
                    {nav}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {isDekstop ? (
          <div className={styles.inputWrapper}>
            <input
              type='text'
              placeholder='Search for...'
              className={styles.headerInput}
            />
            <img src={search} alt='search' className={styles.inputSearch} />
          </div>
        ) : (
          <img src={burger} alt='burger' />
        )}
      </div>
    </div>
  );
};
