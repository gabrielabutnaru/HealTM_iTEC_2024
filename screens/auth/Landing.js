import { View, ImageBackground, Image, Text } from 'react-native';
import KSpacer from '../../components/KSpacer';
import KButton from '../../components/KButton';
import { useNavigation } from '@react-navigation/native';

function Landing() {
  const navigator = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF0F0',
      }}>
      <ImageBackground
        source={require('../../assets/images/ImgBk.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={{ height: 202, width: 160 }}
        />
        <KSpacer h={30} />
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Lexend-SemiBold',
              fontSize: 16,
            }}>
            Log in as...
          </Text>
          <KSpacer h={30} />
          <KButton
            text={'Medic'}
            width={260}
            onPress={() => navigator.navigate('LoginD')}
          />
          <KSpacer h={10} />
          <KButton
            text={'Pacient'}
            width={260}
            onPress={() => navigator.navigate('Login')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
export default Landing;
