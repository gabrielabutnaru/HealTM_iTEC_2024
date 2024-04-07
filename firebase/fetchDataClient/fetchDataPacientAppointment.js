import { database } from '../config';
import { ref, set, remove } from 'firebase/database';
import { Alert } from 'react-native';
import { getUnixTime } from 'date-fns';

export function fetchDataAddAppointment(
  id,
  doctorName,
  clinicName,
  date,
  time
) {
  const timeStamp = getUnixTime(new Date());
  const userRef = ref(database, 'pacientAppointment/' + timeStamp);
  set(userRef, {
    doctorName: doctorName,
    clinicName: clinicName,
    date: date,
    time: time,
    userID: id,
  })
    .then(() => {})
    .catch(error => {
      Alert.alert('Error', error.message);
    });
}

export function fetchDataDeleteAppointment({ id }) {
  const userRef = ref(database, `pacientAppointment/${id}`);
  remove(userRef)
    .then(() => {})
    .catch(error => {
      Alert.alert('Error', error.message);
    });
}
