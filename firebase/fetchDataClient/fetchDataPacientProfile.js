import { database } from '../config';
import { get, ref } from 'firebase/database';

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
