import { View, ScrollView } from 'react-native';
import KSpacer from '../../components/KSpacer';
import { useRoute } from '@react-navigation/native';
import { doctorDataList } from '../../firebase/doctorData';
import KDoctorCard from '../../components/KDoctorCard';

const Categories = () => {
  const route = useRoute();
  const categoryName = route.params?.name;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
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
    </ScrollView>
  );
};

export default Categories;
