import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const KButton = ({ route }) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigator.navigate(route)}
      style={{
        borderRadius: 8,
        backgroundColor: '#F64048',
        padding: 10,
        width: 170,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Lexend-SemiBold',
          fontSize: 16,
          color: 'white',
        }}>
        Programează-te
      </Text>
    </TouchableOpacity>
  );
};

export default KButton;
