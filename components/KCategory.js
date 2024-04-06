import {
  ImageBackground,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { doctorDataList } from '../firebase/doctorData';

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
        onPress={() => {
          try {
            doctorDataList.map(elem => {
              if (elem.speciality === category) {
                navigator.navigate('Categories', {
                  name: category,
                });
              }
            });
          } catch (error) {
            console.error('An error occurred:', error);
          }
        }}>
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
