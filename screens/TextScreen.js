import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchDataAddProfile } from '../firebase/fetchDataDoctor/fetchDataProfile';
import { doctorDataList } from '../firebase/doctorData';

const TestScreen = () => {
  return (
    <View style={profilStyles.container}>
      <TouchableOpacity
        style={profilStyles.loginButton}
        onPress={() => {
          doctorDataList.forEach(elem => {
            fetchDataAddProfile(
              elem.id,
              elem.name,
              elem.clinicName,
              elem.speciality
            );
          });
        }}>
        <Text style={profilStyles.loginText}>DELETE</Text>
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
export default TestScreen;
