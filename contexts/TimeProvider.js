import { createContext } from 'react';

export const TimeProvider = createContext({
  time: '9:00',
  setTime: () => {},
});
