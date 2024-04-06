import { View } from 'react-native';
import { KCalendar } from '../../components/KCalendar';

const Appointment = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 24,
      }}>
      <KCalendar />
    </View>
  );
};

export default Appointment;
