import { auth, database } from '../config';
import { get, ref, update, remove } from 'firebase/database';
import { Alert } from 'react-native';

export function fetchDataAddAppointment(
  doctorName,
  clinicName,
  date,
  time,
  setDoctorName,
  setClinicName,
  setDate,
  setTime
) {
  const userId = auth.currentUser.uid;
  const userRef = ref(database, 'pacientAppointment/' + userId);
  update(userRef, {
    doctorName: doctorName,
    clinicName: clinicName,
    date: date,
    time: time,
  })
    .then(() => {
      Alert.alert('Data added successfully');
      setDoctorName('');
      setClinicName('');
      setDate('');
      setTime('');
    })
    .catch(error => {
      Alert.alert('Error', error.message);
      setDoctorName('');
      setClinicName('');
      setDate('');
      setTime('');
    });
}

export function fetchDataGetAppointment() {
  const usersRef = ref(database, `pacientAppointment/`);
  return get(usersRef).then(card => {
    return Object.values(card.val()).map((elem, index) => {
      return {
        uid: Object.keys(card.val())[index],
        name: elem.name,
        clinicName: elem.clinicName,
        date: elem.date,
        time: elem.time,
      };
    });
  });
}

export function fetchDataDeleteAppointment({ id }) {
  const userRef = ref(database, `pacientAppointment/${id}`);
  remove(userRef)
    .then(() => {
      Alert.alert('Data removed successfully');
    })
    .catch(error => {
      Alert.alert('Error', error.message);
    });
}
