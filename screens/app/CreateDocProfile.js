import { View, ImageBackground, Text } from 'react-native';
import KSpacer from '../../components/KSpacer';
import KInput from '../../components/KInput';
import KButton from '../../components/KButton';

const inputs = [
  {
    icon: 'business-outline',
    title: 'Clinica',
  },
  {
    icon: 'chevron-forward-outline',
    title: 'Specialitate',
  },
  {
    icon: 'newspaper-outline',
    title: 'Description',
  },
];
function CreateDocProfile() {
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
          alignItems: 'center',
        }}>
        <KSpacer h={90} />
        <Text
          style={{
            fontFamily: 'Lexend-Bold',
            fontSize: 40,
            color: '#F64048',
          }}>
          Create profile
        </Text>
        <KSpacer h={60} />
        <View>
          {inputs.map(input => (
            <>
              <KInput icon={input.icon} title={input.title} />
              <KSpacer h={20} />
            </>
          ))}
        </View>
        <KButton
          onPress={() => alert('Profile completed.')}
          text={'Finish'}
          padding={20}
        />
      </ImageBackground>
    </View>
  );
}

export default CreateDocProfile;
