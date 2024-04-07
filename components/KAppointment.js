import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const KAppointment = ({ medic, clinica, zi, ora, onX }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderColor: '#F64048',
        borderWidth: 2,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 16,
        width: 342,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: 'center',
          }}>
          {/*<Text*/}
          {/*  style={{*/}
          {/*    fontSize: 16,*/}
          {/*    fontFamily: 'Lexend-SemiBold',*/}
          {/*    color: '#F64048',*/}
          {/*  }}>*/}
          {/*  {specializare}*/}
          {/*</Text>*/}
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={{ fontSize: 14, fontFamily: 'Lexend-SemiBold' }}>
              Medic:
            </Text>
            <Text>{medic}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={{ fontSize: 14, fontFamily: 'Lexend-SemiBold' }}>
              Clinica:
            </Text>
            <Text>{clinica}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={{ fontSize: 14, fontFamily: 'Lexend-SemiBold' }}>
              Zi:
            </Text>
            <Text>{zi}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={{ fontSize: 14, fontFamily: 'Lexend-SemiBold' }}>
              Ora:
            </Text>
            <Text>{ora}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={onX}>
            <Ionicons
              name={'close-outline'}
              color="#F64048"
              style={{ fontSize: 32 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default KAppointment;
