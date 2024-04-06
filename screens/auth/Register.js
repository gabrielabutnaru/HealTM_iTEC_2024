import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import { useCallback, useContext, useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/config';
import { Ionicons } from '@expo/vector-icons';
import { MyContext } from '../../contexts/myContext';

function Login({ navigation }) {
  const backgroundImage = require('../../assets/images/ImgBk.png');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isMedic } = useContext(MyContext);

  const onPressSubmit = useCallback(({ email, password }) => {
    if (email.length > 0 && password.length > 0) {
      if (!isMedic) {
        signInWithEmailAndPassword(auth, email, password).catch(err =>
          alert(err)
        );
      } else {
        navigation.navigate('CreateDocProfile');
      }
    } else {
      alert('Empty fields');
    }
  }, []);

  return (
    <View style={loginStyles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode={'cover'}
        style={loginStyles.background}>
        <View style={loginStyles.containerTitle}>
          <Text style={loginStyles.titleStyle}>Sign Up</Text>
        </View>
        <View style={loginStyles.containerMiddle}>
          <View style={loginStyles.containerTextInput}>
            <Ionicons
              name={'mail-outline'}
              size={24}
              paddingLeft={10}
              color={'#F64048'}
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Enter your email..."
              placeholderTextColor={'#ACACAC'}
              style={loginStyles.textInput}
            />
          </View>
          <View style={loginStyles.containerTextInput}>
            <Ionicons
              name={'person-outline'}
              size={24}
              paddingLeft={10}
              color={'#F64048'}
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Enter your name..."
              placeholderTextColor={'#ACACAC'}
              style={loginStyles.textInput}
            />
          </View>
          <View style={loginStyles.containerTextInput}>
            <Ionicons
              name={'lock-closed-outline'}
              size={24}
              paddingLeft={10}
              color={'#F64048'}
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Enter your password..."
              secureTextEntry={true}
              placeholderTextColor={'#ACACAC'}
              style={loginStyles.textInput}
            />
          </View>
        </View>
        <View style={loginStyles.containerButton}>
          <TouchableOpacity
            style={loginStyles.loginButton}
            onPress={() => {
              onPressSubmit({ email: email, password: password });
            }}>
            <Text style={loginStyles.loginText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={loginStyles.noAccountContainer}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={loginStyles.signUpText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
  background: {
    flex: 1,
    width: '100%',
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleStyle: {
    fontFamily: 'Lexend-Bold',
    fontSize: 48,
    color: '#F64048',
  },
  containerMiddle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  containerTextInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#F64048',
    borderWidth: 2,
    borderRadius: 16,
    height: '18%',
    gap: 10,
  },
  textInput: {
    width: '70%',
    height: '100%',
    fontSize: 14,
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  loginButton: {
    backgroundColor: '#F64048',
    width: '40%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Lexend-SemiBold',
  },
  forgotPassText: {
    color: '#F64048',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    width: '45%',
  },
  noAccountContainer: {
    flexDirection: 'row',
  },
  noAccountText: {
    fontSize: 14,
  },
  signUpText: {
    color: '#F64048',
    fontWeight: 'bold',
    paddingLeft: 5,
    textDecorationLine: 'underline',
  },
});
export default Login;
