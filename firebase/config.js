import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDWFhR2aHPiGc1wQs-Tygh3VzLLCY8PHvE',
  authDomain: 'itec2024-a2b68.firebaseapp.com',
  projectId: 'itec2024-a2b68',
  storageBucket: 'itec2024-a2b68.appspot.com',
  messagingSenderId: '175631717715',
  appId: '1:175631717715:web:f7a088abef8f7f99b67da6',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const database = getDatabase(app);

export { auth, database };
