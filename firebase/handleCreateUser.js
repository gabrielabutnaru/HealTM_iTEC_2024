import { auth, database } from './config';
import { ref, set } from 'firebase/database';

export const handleCreateUser = ({ email }) => {
  const userData = {
    email,
    id: auth.currentUser.uid,
  };

  const usersRef = ref(database, 'users/' + auth.currentUser.uid);
  set(usersRef, userData).then(() => console.log('Registered with success'));
};
