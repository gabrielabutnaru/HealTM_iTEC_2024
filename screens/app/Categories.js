import { View, ScrollView } from 'react-native';
import KDoctorCard from '../../components/KDoctorCard';
import KSpacer from '../../components/KSpacer';
import { useRoute } from '@react-navigation/native';

const Categories = () => {
  const route = useRoute();
  const name = route.params?.name;
  const clinicName = route.params?.clinicName;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <KSpacer h={40} />
        <KDoctorCard name={name} clinicName={clinicName} />
      </View>
    </ScrollView>
  );
};

export default Categories;
