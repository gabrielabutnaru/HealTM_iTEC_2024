import { database } from '../config';
import { get, ref, set, remove } from 'firebase/database';
import { Alert } from 'react-native';
import { getUnixTime } from 'date-fns';

export function fetchDataAddAppointment(doctorName, clinicName, date, time) {
  const id = getUnixTime(new Date());
  const userRef = ref(database, 'pacientAppointment/' + id);
  set(userRef, {
    doctorName: doctorName,
    clinicName: clinicName,
    date: date,
    time: time,
  })
    .then(() => {})
    .catch(error => {
      Alert.alert('Error', error.message);
    });
}

export function fetchDataGetAppointment() {
  const usersRef = ref(database, `pacientAppointment/`);
  return get(usersRef).then(card => {
    return Object.values(card.val()).map((elem, index) => {
      return {
        uid: Object.keys(card.val())[index],
        doctorName: elem.doctorName,
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
