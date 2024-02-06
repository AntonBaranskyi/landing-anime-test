import styles from './BurgerContent.module.scss';
import { Input } from '../Input';
import { HeaderBottomNav } from '../HeaderBottomNav';
import { HeaderNav } from '../HeaderNav';

export const BurgerContent = () => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <Input />
      </div>
      <div className={styles.bottomNavWrapper}>
        <HeaderBottomNav isInsideBurger />
      </div>

      <div className=''>
        <HeaderNav isInsideBurger />
      </div>
    </>
  );
};
