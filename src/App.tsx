import { useContext } from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { MainContext } from './context/MainContext';
import { BurgerMenu } from './components/BurgerMenu';
import { BurgerContent } from './components/BurgerContent';

function App() {
  const { isBurgerOpen } = useContext(MainContext);

  return (
    <>
      <Header />
      <Banner />

      <Main />
      <Footer />

      {isBurgerOpen && (
        <BurgerMenu>
          <BurgerContent />
        </BurgerMenu>
      )}
    </>
  );
}

export default App;
