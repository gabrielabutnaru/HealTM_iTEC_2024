import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { auth } from '../../firebase/config';
import { signOut } from '@firebase/auth';
import { useEffect, useState } from 'react';
import {
  fetchDataAddProfile,
  fetchDataGetProfile,
} from '../../firebase/fetchDataDoctor/fetchDataProfile';

const Profil = () => {
  const [name, setName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [description, setDescription] = useState('');
  const [profileCart, setProfileCart] = useState([]);

  useEffect(() => {
    fetchDataGetProfile().then(response => {
      setProfileCart(response);
    });
  }, []);

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
      <Button
        title={'post data'}
        onPress={() =>
          fetchDataAddProfile(
            name,
            clinicName,
            speciality,
            description,
            setName,
            setClinicName,
            setSpeciality,
            setDescription
          )
        }
      />
      <Button
        title={'see data'}
        onPress={() =>
          profileCart.forEach(el => {
            console.log(el);
          })
        }
      />
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
