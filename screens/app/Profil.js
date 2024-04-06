import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../../firebase/config';
import { signOut } from '@firebase/auth';
import KAppointment from '../../components/KAppointment';
import KSpacer from '../../components/KSpacer';

const Profil = () => {
  return (
    <View style={profilStyles.container}>
      <Text>Profil</Text>
      <KSpacer h={20} />
      <KAppointment
        specializare={'Cardiologie'}
        clinica={'Medicis'}
        ora={'10:00'}
        zi={'11.04.2024'}
        medic={'Ana Maria'}
        onPress={() => alert('Delete appointment.')}
      />
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
