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
        onPress={() =>
          doctorDataList.map(elem => {
            if (elem.speciality === category) {
              navigator.navigate('Categories', {
                name: elem.name,
                clinicName: elem.clinicName,
              });
            }
          })
        }>
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
