import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import KSpacer from '../../components/KSpacer';
import KHourLabel from '../../components/KHourLabel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Programare({ navigation }) {
  const { width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF0F0',
        padding: 12,
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../../assets/images/ImgBk.png')}
        resizeMode={'cover'}
        style={{ flex: 1, width: '100%' }}>
        <View
          style={{
            width: width,
            paddingTop: top + 10,
            paddingLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{
                uri: 'https://static-00.iconduck.com/assets.00/arrow-left-icon-2048x1433-le08mlmd.png',
              }}
              style={{ height: 20, width: 30 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Lexend-Bold',
              fontSize: 36,
              color: '#F64048',
              textAlign: 'right',
              paddingHorizontal: 30,
            }}>
            Programare
          </Text>
        </View>
        <KSpacer h={20} />
        <KHourLabel />
      </ImageBackground>
    </View>
  );
}

export default Programare;
