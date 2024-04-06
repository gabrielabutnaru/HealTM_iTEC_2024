import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../../firebase/config';
import { signOut } from '@firebase/auth';
import KAppointment from '../../components/KAppointment';
import KSpacer from '../../components/KSpacer';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import KButton from '../../components/KButton';

const Profil = () => {
  const [state, setState] = useState(false);
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setState(true);
  }, []);

  const closeModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setState(false);
  }, []);

  return (
    <View style={profilStyles.container}>
      <Text>Profil</Text>
      <KSpacer h={20} />
      <KAppointment
        specializare={'Cardiologie'}
        clinica={'Medicis'}
        ora={'10:00'}
        zi={'11.04.2024'}
        medic={'Ana Maria'}
        onX={() => handlePresentModalPress()}
      />
      <TouchableOpacity
        style={profilStyles.loginButton}
        onPress={() => {
          signOut(auth).then();
        }}>
        <Text style={profilStyles.loginText}>LogOut</Text>
      </TouchableOpacity>
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
              onPress={() => alert('Insert delete here')}
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
    </View>
  );
};

const profilStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
