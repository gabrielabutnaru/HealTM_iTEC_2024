import { auth, database } from '../config';
import { get, ref, set } from 'firebase/database';
import { Alert } from 'react-native';

export function fetchDataAddPacient(name) {
  const userId = auth.currentUser.uid;
  const userRef = ref(database, 'pacientUserData/' + userId);
  set(userRef, {
    name: name,
  })
    .then(() => {
      Alert.alert('Data added successfully');
    })
    .catch(error => {
      Alert.alert('Error', error.message);
    });
}

export function fetchDataGetPacient() {
  const usersRef = ref(database, `pacientUserData/`);
  return get(usersRef).then(card => {
    return Object.values(card.val()).map((elem, index) => {
      return {
        uid: Object.keys(card.val())[index],
        name: elem.name,
      };
    });
  });
}
