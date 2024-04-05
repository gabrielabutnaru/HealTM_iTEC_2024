import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const KCategory = ({ category, image }) => {
  const navigator = useNavigation();
  return (
    <ImageBackground
      source={{ uri: image }}
      style={{ overflow: 'hidden', borderRadius: 12 }}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          paddingHorizontal: 36,
          paddingVertical: 46,
          borderRadius: 12,
          width: 190,
        }}
        onPress={() => navigator.navigate('Categories')}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Lexend-SemiBold',
            fontSize: 16,
          }}>
          {category}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default KCategory;
