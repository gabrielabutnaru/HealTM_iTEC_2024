import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import KSpacer from '../../components/KSpacer';
import KHourLabel from '../../components/KHourLabel';
import { KCalendar } from '../../components/KCalendar';
import { useRoute } from '@react-navigation/native';
import KButton from '../../components/KButton';
import { useContext, useEffect, useState } from 'react';
import { TimeProvider } from '../../contexts/TimeProvider';
import { DateProvider } from '../../contexts/DateProvider';
import { Ionicons } from '@expo/vector-icons';
import { fetchDataAddAppointment } from '../../firebase/fetchDataClient/fetchDataPacientAppointment';
import { auth, database } from '../../firebase/config';
import { onValue, ref } from 'firebase/database';

function Programare({ navigation }) {
  const { date } = useContext(DateProvider);
  const { time } = useContext(TimeProvider);

  const route = useRoute();
  const name = route.params?.name;
  const clinicName = route.params?.clinicName;
  const [appointmentList, setAppointmentList] = useState([]);
  let variabila = 0;

  useEffect(() => {
    const usersRef = ref(database, `pacientAppointment/`);
    return onValue(usersRef, card => {
      if (card.exists()) {
        setAppointmentList(
          Object.values(card.val())
            .filter(elem => {
              console.log(elem);
              return elem.userID === auth.currentUser.uid;
            })
            .map((elem, index) => {
              return {
                uid: Object.keys(card.val())[index],
                doctorName: elem.doctorName,
                clinicName: elem.clinicName,
                date: elem.date,
                time: elem.time,
              };
            })
        );
      }
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF0F0',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../../assets/images/ImgBk.png')}
        resizeMode={'cover'}
        style={{ flex: 1, width: '100%' }}>
        <View style={{ paddingHorizontal: 24, paddingVertical: 56 }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name={'arrow-back-outline'}
                color="#2A2A2A"
                style={{ fontSize: 32 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Lexend-Bold',
                fontSize: 36,
                color: '#F64048',
              }}>
              Programare
            </Text>
          </View>
          <KSpacer h={24} />
          <Text
            style={{
              fontFamily: 'Lexend-SemiBold',
              color: '#F64048',
              fontSize: 20,
            }}>
            {name}
          </Text>
          <KSpacer h={8} />
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={{ fontFamily: 'Lexend-SemiBold', fontSize: 18 }}>
              Clinica:
            </Text>
            <Text style={{ fontSize: 18 }}>{clinicName}</Text>
          </View>
          <KSpacer h={24} />
          <KCalendar />

          <KSpacer h={24} />
          <KHourLabel />
          <KSpacer h={36} />
          <View style={{ alignItems: 'center', width: '100%' }}>
            <KButton
              width={342}
              padding={12}
              onPress={() => {
                appointmentList.map(doctor => {
                  if (
                    doctor.doctorName === name &&
                    doctor.date === date &&
                    doctor.time === time
                  ) {
                    variabila = 1;
                  } else if (date !== '') {
                    fetchDataAddAppointment(
                      auth.currentUser.uid,
                      name,
                      clinicName,
                      date,
                      time
                    );
                    variabila = 2;
                  } else if (date === '') {
                    variabila = 3;
                  }
                });
                if (variabila === 1) {
                  alert(
                    'Selected interval is not available. Please choose another one!'
                  );
                } else if (variabila === 2) {
                  alert('Appointment made successfully');
                  navigation.navigate('Specialități');
                } else if (variabila === 3) {
                  alert('Empty fields!');
                }
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Programare;
