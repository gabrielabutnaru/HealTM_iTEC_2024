import { createContext } from 'react';

export const DateProvider = createContext({
  date: '',
  setDate: () => {},
});
