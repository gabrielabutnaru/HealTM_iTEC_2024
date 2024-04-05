import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useCallback, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { handleCreateUser } from '../../firebase/handleCreateUser';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressSubmit = useCallback(({ email, password }) => {
    console.log(email, ', ', password);
    if (email.length > 0 && password.length > 0) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          handleCreateUser({ email });
        })
        .catch(err => alert(err));
    } else {
      console.log(email, password);
      alert('Empty fields');
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email..."
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password..."
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={registerStyles.loginButton}
        onPress={() => {
          onPressSubmit({ email: email, password: password });
        }}>
        <Text style={registerStyles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const registerStyles = StyleSheet.create({
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
export default Register;
