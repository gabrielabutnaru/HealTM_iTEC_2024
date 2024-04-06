import { Calendar } from 'react-native-calendars';
import { useContext } from 'react';
import { DateProvider } from '../contexts/DateProvider';

export const KCalendar = () => {
  const { date, setDate } = useContext(DateProvider);
  return (
    <Calendar
      style={{
        borderColor: '#F64048',
        borderWidth: 2,
        borderRadius: 16,
        overflow: 'hidden',
      }}
      theme={{
        textSectionTitleColor: '#2A2A2A',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#F64048',
        todayTextColor: '#F64048',
        dayTextColor: '#898989',
        textDisabledColor: '#d9e1e8',
        dotColor: '#F64048',
        selectedDotColor: '#FFFFFF',
        arrowColor: '#F64048',
        monthTextColor: '#F64048',
        textDayFontFamily: 'Lexend-Medium',
        textMonthFontFamily: 'Lexend-Bold',
        textDayHeaderFontFamily: 'Lexend-SemiBold',
        textDayFontSize: 16,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 14,
      }}
      enableSwipeMonths={true}
      onDayPress={day => {
        date === '' ? setDate(day.dateString) : setDate('');
      }}
      markedDates={{
        [date]: {
          selected: true,
          marked: true,
        },
      }}
      disabledDaysIndexes={[0, 6]}
    />
  );
};
