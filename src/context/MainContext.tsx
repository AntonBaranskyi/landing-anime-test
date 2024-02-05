import React, { createContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type State = {
  isBurgerOpen: boolean;
  isBannerOpen: boolean;
  onToggleBurger: (bool: boolean) => void;
  onToggleBanner: () => void;
};

export const MainContext = createContext<State>({
  isBurgerOpen: false,
  isBannerOpen: false,
  onToggleBurger: () => {},
  onToggleBanner: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const MainProvider: React.FC<Props> = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const isDekstop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    if (isDekstop) {
      setIsBurgerOpen(false);
      setIsBannerOpen(false);
    }
  }, [isDekstop]);

  const onToggleBurger = (bool: boolean) => {
    setIsBurgerOpen(bool);
  };

  const onToggleBanner = () => {
    setIsBannerOpen((prev) => !prev);
  };

  const value = { isBurgerOpen, onToggleBurger, isBannerOpen, onToggleBanner };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
