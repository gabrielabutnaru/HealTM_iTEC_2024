import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { TimeProvider } from '../contexts/TimeProvider';

const data = [
  { label: '9:00', value: '9:00' },
  { label: '10:00', value: '10:00' },
  { label: '11:00', value: '11:00' },
  { label: '12:00', value: '12:00' },
  { label: '13:00', value: '13:00' },
  { label: '14:00', value: '14:00' },
  { label: '15:00', value: '15:00' },
  { label: '16:00', value: '16:00' },
];

const DropdownComponent = () => {
  const { time, setTime } = useContext(TimeProvider);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Program:"
      searchPlaceholder="Search..."
      value={time}
      onChange={item => {
        setTime(item.value);
      }}
      renderLeftIcon={() => (
        <Ionicons
          style={styles.icon}
          color="#F64048"
          name="time-outline"
          size={20}
        />
      )}
      renderRightIcon={() => (
        <Ionicons
          style={styles.icon}
          color="#F64048"
          name="chevron-down-outline"
          size={20}
        />
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 60,
    width: 140,
    borderColor: '#F64048',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
  },
  icon: {
    paddingHorizontal: 8,
    color: '#F64048',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Lexend-Medium',
    color: '#2A2A2A',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 60,
    fontSize: 16,
  },
});
