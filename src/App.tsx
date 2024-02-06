import { useContext } from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { MainContext } from './context/MainContext';
import { BurgerMenu } from './components/BurgerMenu';
import { BurgerContent } from './components/BurgerContent';

import styles from './App.module.scss';

function App() {
  const { isBurgerOpen, isDarkMode } = useContext(MainContext);

  return (
    <div className={styles.app} data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <Banner />

      <Main />
    
        <Footer />
    

      {isBurgerOpen && (
        <BurgerMenu>
          <BurgerContent />
        </BurgerMenu>
      )}
    </div>
  );
}

export default App;
