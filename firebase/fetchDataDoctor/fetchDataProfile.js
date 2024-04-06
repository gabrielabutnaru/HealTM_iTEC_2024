import { database } from '../config';
import { ref, set, get, remove } from 'firebase/database';
import { Alert } from 'react-native';

export function fetchDataAddProfile(id, name, clinicName, speciality) {
  const userRef = ref(database, 'doctorUser/' + id);
  set(userRef, {
    name: name,
    clinicName: clinicName,
    speciality: speciality,
  })
    .then(() => {
      Alert.alert('Data added successfully');
    })
    .catch(error => {
      Alert.alert('Error', error.message);
    });
}

export function fetchDataGetProfile() {
  const usersRef = ref(database, `doctorUser/`);
  return get(usersRef).then(card => {
    return Object.values(card.val()).map((elem, index) => {
      return {
        uid: Object.keys(card.val())[index],
        name: elem.name,
        clinicName: elem.clinicName,
        speciality: elem.speciality,
      };
    });
  });
}

export function fetchDataDeleteProfile({ userUID }) {
  const userRef = ref(database, `doctorUser/` + userUID);
  remove(userRef)
    .then(() => {
      Alert.alert('Data removed successfully');
    })
    .catch(error => {
      Alert.alert('Error', error.message);
    });
}
