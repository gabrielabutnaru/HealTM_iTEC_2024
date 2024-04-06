import { auth, database } from '../config';
import { ref, update, get } from 'firebase/database';
import { Alert } from 'react-native';

export function fetchDataAddProfile(
  name,
  clinicName,
  speciality,
  description,
  setName,
  setClinicName,
  setSpeciality,
  setDescription
) {
  const userId = auth.currentUser.uid;
  const userRef = ref(database, 'users/' + userId);
  update(userRef, {
    name: name,
    clinicName: clinicName,
    speciality: speciality,
    description: description,
  })
    .then(() => {
      Alert.alert('Data added successfully');
      setName('');
      setClinicName('');
    })
    .catch(error => {
      Alert.alert('Error', error.message);
      setName('');
      setClinicName('');
      setSpeciality('');
      setDescription('');
    });
}

export function fetchDataGetProfile() {
  const usersRef = ref(database, `users/`);
  return get(usersRef).then(card => {
    return Object.values(card.val()).map((elem, index) => {
      return {
        uid: Object.keys(card.val())[index],
        name: elem.name,
        clinicName: elem.clinicName,
        speciality: elem.speciality,
        description: elem.description,
      };
    });
  });
}
