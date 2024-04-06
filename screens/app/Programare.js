import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import KSpacer from '../../components/KSpacer';
import KHourLabel from '../../components/KHourLabel';
import { KCalendar } from '../../components/KCalendar';
import { useRoute } from '@react-navigation/native';
import KButton from '../../components/KButton';
import { useContext } from 'react';
import { TimeProvider } from '../../contexts/TimeProvider';
import { DateProvider } from '../../contexts/DateProvider';
import { Ionicons } from '@expo/vector-icons';
function Programare({ navigation }) {
  const { date } = useContext(DateProvider);
  const { time } = useContext(TimeProvider);

  const { params } = useRoute();

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
            {params.name}
          </Text>
          <KSpacer h={8} />
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={{ fontFamily: 'Lexend-SemiBold', fontSize: 18 }}>
              Clinica:
            </Text>
            <Text style={{ fontSize: 18 }}>{params.clinica}</Text>
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
                console.log('Ne-am programat', time, date);
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Programare;
