import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import { auth, database } from '../../firebase/config';
import { signOut } from '@firebase/auth';
import { ref, set } from 'firebase/database';
import { useState } from 'react';

const Profil = () => {
  const [name, setName] = useState('');
  const [clinicName, setClinicName] = useState('');

  // function writeUserData(userId, name, clinicName) {
  //     set(ref(database, 'users/' + userId), {
  //         username: name,
  //         clinicName: clinicName,
  //     }).then(() => {
  //         Alert.alert("data logged successfully");
  //     })
  //         .catch((error) => {
  //         alert(error);
  //     });
  // }

  const addData = () => {
    const userId = auth.currentUser.uid;
    const userRef = ref(database, 'users/' + userId);
    set(userRef, {
      name: name,
      clinicName: clinicName,
    })
      .then(() => {
        Alert.alert('Data added successfully');
        setName('');
        setClinicName('');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={profilStyles.container}>
      <Text>Profil</Text>
      <TouchableOpacity
        style={profilStyles.loginButton}
        onPress={() => {
          signOut(auth).then();
        }}>
        <Text style={profilStyles.loginText}>LogOut</Text>
      </TouchableOpacity>
      <TextInput
        onChangeText={setName}
        value={name}
        placeholder="Enter your name..."
      />
      <TextInput
        onChangeText={setClinicName}
        value={clinicName}
        placeholder="Enter clinic name..."
      />
      <Button title={'post data'} onPress={addData} />
    </View>
  );
};

const profilStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#081F5C',
    width: 85,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  loginText: {
    color: '#F7F2EB',
    fontSize: 16,
  },
});
export default Profil;
