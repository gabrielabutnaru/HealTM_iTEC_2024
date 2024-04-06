import { View, ScrollView } from 'react-native';
import KDoctorCard from '../../components/KDoctorCard';
import KSpacer from '../../components/KSpacer';

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <KSpacer h={40} />
        <KDoctorCard name={'Alintza'} clinica={'Sante'} />
      </View>
    </ScrollView>
  );
};

export default Categories;
