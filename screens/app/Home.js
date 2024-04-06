import { View, Text, ScrollView, ImageBackground } from 'react-native';
import KSpacer from '../../components/KSpacer';
import KCategory from '../../components/KCategory';

const categTags = [
  {
    category: 'Alergologie & Imunologie',
    image:
      'https://images.unsplash.com/photo-1634128221567-3220e071d1ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    category: 'Anatomie patologică',
    image:
      'https://images.unsplash.com/photo-1539814858141-928517f6afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hdG9teXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    category: 'Cardilogie',
    image:
      'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    category: 'Chirurgie',
    image:
      'https://plus.unsplash.com/premium_photo-1664304334372-3ae5f0bc6665?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpcnVyZ2llfGVufDB8fDB8fHww',
  },
  {
    category: ' Dietetică',
    image:
      'https://images.unsplash.com/photo-1685967836908-7d3b4921a670?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    category: 'Epidemiologie',
    image:
      'https://media.istockphoto.com/id/1211333698/photo/man-in-a-specialist-mask-and-hat-looks-into-a-microscope.webp?b=1&s=170667a&w=0&k=20&c=PIs95qy4NlmcgPJo77HMuT3zbL5MJ97i8x4qNHQVmBU=',
  },
  {
    category: 'Genetică medicală',
    image:
      'https://plus.unsplash.com/premium_photo-1676226342632-5072f3b96149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdlbmV0aWNzfGVufDB8fDB8fHww',
  },
  {
    category: 'Pneumologie',
    image:
      'https://plus.unsplash.com/premium_photo-1711987509500-6ea0f58704cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG5ldW1vbm9sb2d5fGVufDB8fDB8fHww',
  },
  {
    category: 'Neurologie',
    image:
      'https://plus.unsplash.com/premium_photo-1693947944028-de83349000ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5ldXJvbG9naWV8ZW58MHx8MHx8fDA%3D',
  },
  {
    category: 'Oftalmologie',
    image:
      'https://plus.unsplash.com/premium_photo-1664299267040-5be8e3f3c057?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2Z0YWxtb2xvZ2llfGVufDB8fDB8fHww',
  },
  {
    category: 'Radiologie',
    image:
      'https://images.unsplash.com/photo-1666214280429-d3985e2ef0b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHJhZGlvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    category: 'Stomatologie',
    image:
      'https://plus.unsplash.com/premium_photo-1672922646437-54f1602c7d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0b21hdG9sb2d5fGVufDB8fDB8fHww',
  },
  {
    category: 'Urologie',
    image:
      'https://plus.unsplash.com/premium_photo-1702598804759-8fb687f774fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXJvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    category: 'Psihiatrie',
    image:
      'https://images.unsplash.com/photo-1562243061-204550d8a2c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYXRyeXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    category: 'ORL',
    image:
      'https://media.istockphoto.com/id/1414465951/photo/a-young-woman-doctor-examines-the-nose-of-a-patient-in-the-orl-clinic.webp?b=1&s=170667a&w=0&k=20&c=wP_XPZmCjsB81IHToRK7b0GKz_udsO7JocNSL20z66A=',
  },
  {
    category: 'Ginecologie',
    image:
      'https://plus.unsplash.com/premium_photo-1702598826733-a88880fb496c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGd5bmVjb2xvZ3l8ZW58MHx8MHx8fDA%3D',
  },
  {
    category: 'Medicină de familie',
    image:
      'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    category: 'Pediatrie',
    image:
      'https://images.unsplash.com/photo-1676313027775-a5a3dca6f98b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVkaWF0cnl8ZW58MHx8MHx8fDA%3D',
  },
  {
    category: 'Psihologie',
    image:
      'https://plus.unsplash.com/premium_photo-1665990294874-36ff13d2b66d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBzeWNob2xvZ3l8ZW58MHx8MHx8fDA%3D',
  },
  {
    category: 'Ortopedie',
    image:
      'https://plus.unsplash.com/premium_photo-1661716863392-bb45c7d2251b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3J0aG9wZWRpY3N8ZW58MHx8MHx8fDA%3D',
  },
];

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#FFF0F0',
      }}>
      <ImageBackground
        source={require('../../assets/images/ImgBk.png')}
        style={{ alignItems: 'center' }}>
        <KSpacer h={40} />
        <Text
          style={{
            fontSize: 48,
            fontFamily: 'Lexend-Bold',
            color: '#F64048',
          }}>
          Specialități
        </Text>
        <KSpacer h={40} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flexDirection: 'row', flex: 1, gap: 8 }}>
            <View style={{ gap: 10 }}>
              {categTags.slice(0, categTags.length / 2).map(tag => (
                <KCategory
                  key={categTags.indexOf(tag)}
                  category={tag.category}
                  image={tag.image}
                />
              ))}
            </View>

            <View style={{ gap: 10 }}>
              {categTags
                .slice(categTags.length / 2, categTags.length)
                .map(tag => (
                  <KCategory
                    key={categTags.indexOf(tag)}
                    category={tag.category}
                    image={tag.image}
                  />
                ))}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Home;
