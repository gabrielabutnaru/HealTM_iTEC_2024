import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import KSpacer from '../../components/KSpacer';
import { useRoute } from '@react-navigation/native';
import { doctorDataList } from '../../firebase/doctorData';
import KDoctorCard from '../../components/KDoctorCard';
import { Ionicons } from '@expo/vector-icons';

const Categories = ({ navigation }) => {
  const route = useRoute();
  const categoryName = route.params?.name;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#FFF0F0' }}>
      <ImageBackground
        source={require('../../assets/images/ImgBk.png')}
        style={{ alignItems: 'center', height: '100%' }}>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 24,
            paddingTop: 56,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name={'arrow-back-outline'}
              color="#2A2A2A"
              style={{ fontSize: 32 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            width: '100%',
          }}>
          <KSpacer h={40} />
          {doctorDataList
            .filter(elem => elem.speciality === categoryName)
            .map(doctor => {
              return (
                <View key={doctorDataList.indexOf(doctor)}>
                  <KDoctorCard
                    name={doctor.name}
                    clinicName={doctor.clinicName}
                  />
                  <KSpacer />
                </View>
              );
            })}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Categories;
