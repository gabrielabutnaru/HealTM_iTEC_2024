import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { auth, database } from '../../firebase/config';
import { signOut } from '@firebase/auth';
import KAppointment from '../../components/KAppointment';
import KSpacer from '../../components/KSpacer';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import KButton from '../../components/KButton';
import { fetchDataDeleteAppointment } from '../../firebase/fetchDataClient/fetchDataPacientAppointment';
import { onValue, ref } from 'firebase/database';

const Profil = () => {
  const [state, setState] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const [appointmentList, setAppointmentList] = useState([]);
  const [IDappointment, setIDappointment] = useState('');

  const snapPoints = useMemo(() => ['50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setState(true);
  }, []);

  const closeModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setState(false);
  }, []);

  useEffect(() => {
    const usersRef = ref(database, `pacientAppointment/`);
    return onValue(usersRef, card => {
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
    });
  }, []);

  return (
    <View style={profilStyles.container}>
      <ImageBackground
        source={require('../../assets/images/ImgBk.png')}
        style={{ alignItems: 'center' }}>
        <View
          style={{
            paddingVertical: 42,
            paddingHorizontal: 24,
            width: '100%',
            justifyContent: 'space-between',
            height: '100%',
          }}>
          <View>
            <Text
              style={{
                color: '#F64048',
                fontFamily: 'Lexend-Bold',
                fontSize: 48,
              }}>
              Profil
            </Text>
            <KSpacer h={36} />
            <Text
              style={{
                color: '#F64048',
                fontFamily: 'Lexend-SemiBold',
                fontSize: 24,
              }}>
              Nume
            </Text>

            <KSpacer h={20} />
            <Text
              style={{
                color: '#2A2A2A',
                fontFamily: 'Lexend-SemiBold',
                fontSize: 20,
              }}>
              Programări
            </Text>
            <KSpacer h={8} />
            <ScrollView>
              {appointmentList.map(elem => {
                return (
                  <KAppointment
                    key={appointmentList.indexOf(elem)}
                    // specializare={'Cardiologie'}
                    clinica={elem.clinicName}
                    ora={elem.time}
                    zi={elem.date}
                    medic={elem.doctorName}
                    onX={() => {
                      setIDappointment(elem.id);
                      handlePresentModalPress();
                    }}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View>
            <KButton
              width={'100%'}
              label={'Log Out'}
              onPress={() => {
                signOut(auth).then();
              }}
            />
          </View>
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onDismiss={closeModalPress}
          handleIndicatorStyle={{ backgroundColor: '#F64048' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 36,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Lexend-SemiBold',
                color: '#F64048',
                textAlign: 'center',
              }}>
              Cancel your appointment?
            </Text>
            <KSpacer h={40} />
            <View style={{ flexDirection: 'row' }}>
              <KButton
                width={100}
                label={'Yes'}
                onPress={() => {
                  console.log(IDappointment);
                  fetchDataDeleteAppointment({ id: IDappointment });
                }}
              />
              <KSpacer w={20} />
              <KButton
                width={100}
                label={'No'}
                outline={true}
                onPress={() => closeModalPress()}
              />
            </View>
          </View>
        </BottomSheetModal>
        {state === true && (
          <View
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}></View>
        )}
      </ImageBackground>
    </View>
  );
};

const profilStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#FFF0F0',
  },
  loginButton: {
    backgroundColor: '#081F5C',
    width: 85,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  loginText: {
    color: '#F7F2EB',
    fontSize: 16,
  },
});
export default Profil;
