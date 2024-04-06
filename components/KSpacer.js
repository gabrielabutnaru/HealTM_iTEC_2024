import { View, Text } from 'react-native';

function KSpacer({ h = 10, w = 0 }) {
  return (
    <View style={{ height: h, width: w }}>
      <Text></Text>
    </View>
  );
}

export default KSpacer;
