import { auth, database } from '../config';
import { get, ref, update } from 'firebase/database';
import { Alert } from 'react-native';

export function fetchDataAddPacient(name, setName) {
  const userId = auth.currentUser.uid;
  const userRef = ref(database, 'pacientUser/' + userId);
  update(userRef, {
    name: name,
  })
    .then(() => {
      Alert.alert('Data added successfully');
      setName('');
    })
    .catch(error => {
      Alert.alert('Error', error.message);
      setName('');
    });
}

export function fetchDataGetPacient() {
  const usersRef = ref(database, `pacientUser/`);
  return get(usersRef).then(card => {
    return Object.values(card.val()).map((elem, index) => {
      return {
        uid: Object.keys(card.val())[index],
        name: elem.name,
      };
    });
  });
}
