import { TouchableOpacity, Text } from 'react-native';

const KButton = ({
  onPress,
  width = 170,
  padding = 10,
  text = ' Programează-te',
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        borderRadius: 8,
        backgroundColor: '#F64048',
        padding: padding,
        width: width,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Lexend-SemiBold',
          fontSize: 16,
          color: 'white',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default KButton;
