import {
  ImageBackground,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const KCategory = ({ category, image }) => {
  const navigator = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <ImageBackground
      source={{ uri: image }}
      style={{ overflow: 'hidden', borderRadius: 12 }}>
      <TouchableOpacity
        style={{
          paddingHorizontal: 32,
          borderRadius: 12,
          width: width * 0.45,
          height: 120,
          justifyContent: 'center',
        }}
        onPress={() => navigator.navigate('Categories')}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Lexend-SemiBold',
            fontSize: 16,
            textAlign: 'center',
          }}>
          {category}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default KCategory;
