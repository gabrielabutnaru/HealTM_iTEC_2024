import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useCallback, useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressSubmit = useCallback(({ email, password }) => {
    if (email.length > 0 && password.length > 0) {
      signInWithEmailAndPassword(auth, email, password).catch(err =>
        alert(err)
      );
    } else {
      alert('Empty fields');
    }
  }, []);

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.containerTitle}>
        <Text>buna</Text>
      </View>
      <View style={loginStyles.containerTextInput}>
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
      </View>
      <View style={loginStyles.containerButton}>
        <TouchableOpacity
          style={loginStyles.loginButton}
          onPress={() => {
            onPressSubmit({ email: email, password: password });
          }}>
          <Text style={loginStyles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF0F0',
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  containerTextInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
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
export default Login;
