import { createContext } from 'react';

export const MyContext = createContext({
  isMedic: false,
  setIsMedic: () => {},
});
