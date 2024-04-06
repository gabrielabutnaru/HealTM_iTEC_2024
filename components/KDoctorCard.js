import { View, Text } from 'react-native';
import KSpacer from './KSpacer';
import KButton from './KButton';
import { useNavigation } from '@react-navigation/native';

const KDoctorCard = () => {
  const navigator = useNavigation();
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderColor: '#F64048',
        borderWidth: 2,
        padding: 12,
        borderRadius: 16,
        height: 170,
      }}>
      <Text
        style={{
          fontFamily: 'Lexend-SemiBold',
          color: '#F64048',
          fontSize: 20,
        }}>
        Alina Bălăceanu
      </Text>
      <KSpacer h={10} />
      <View style={{ flexDirection: 'row', gap: 4 }}>
        <Text style={{ fontFamily: 'Lexend-SemiBold', fontSize: 18 }}>
          Clinica:
        </Text>
        <Text style={{ fontSize: 18 }}>Medicis Arzthaus</Text>
      </View>
      <KSpacer h={40} />
      <KButton onPress={() => navigator.navigate('Programare')} />
    </View>
  );
};
export default KDoctorCard;
