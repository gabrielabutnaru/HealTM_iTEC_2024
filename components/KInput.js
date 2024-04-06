import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const KInput = ({ icon, title }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#F64048',
        borderWidth: 2,
        borderRadius: 16,
        height: '14%',
        gap: 6,
      }}>
      <Ionicons name={icon} size={24} color={'#F64048'} />
      <TextInput
        placeholder={title}
        placeholderTextColor={'#ACACAC'}
        style={{ width: '70%', height: '100%', fontSize: 16 }}
      />
    </View>
  );
};
export default KInput;
