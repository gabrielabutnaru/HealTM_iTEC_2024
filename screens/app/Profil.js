import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../../firebase/config';
import { signOut } from '@firebase/auth';

const Profil = () => {
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
