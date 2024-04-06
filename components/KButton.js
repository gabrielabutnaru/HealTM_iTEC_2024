import { TouchableOpacity, Text } from 'react-native';

const KButton = ({
  onPress,
  width = 180,
  padding = 10,
  label = 'Programează-te',
  outline = false,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        borderRadius: 8,
        backgroundColor: outline ? 'transparent' : '#F64048',
        borderColor: '#F64048',
        borderWidth: 2,
        padding: padding,
        width: width,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Lexend-SemiBold',
          fontSize: 16,
          color: outline ? '#F64048' : '#FFFFFF',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default KButton;
