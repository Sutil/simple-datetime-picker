import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { DateTimeButton, DateTimeLabel } from './styles';

export default function DateTimeInput({ date, onValueChange, placeholder }) {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const formattedDate = useMemo(() => {
    return date ? format(date, 'dd/MM/yyyy HH:mm', { locale: pt }) : '';
  }, [date]);

  function showNow(showMode) {
    setMode(showMode);
    setShow(true);
  }

  function showDate() {
    showNow('date');
  }

  function showTime() {
    showNow('time');
  }

  function handleSetDate(value) {
    const newDate = new Date(date);
    console.log(value);
    newDate.setFullYear(value.getFullYear());
    newDate.setMonth(value.getMonth());
    newDate.setDate(value.getDate());
    onValueChange(newDate);
  }

  function handleSetTime(value) {
    const newDate = new Date(date);
    newDate.setHours(value.getHours());
    newDate.setMinutes(value.getMinutes());
    onValueChange(newDate);
  }

  function onChange(event, value) {
    console.log(event);
    value = value || date;
    setShow(false);

    if (mode === 'date') {
      handleSetDate(value);
      showTime();
    } else {
      handleSetTime(value);
    }
  }

  return (
    <View>
      <DateTimeButton onPress={showDate}>
        <DateTimeLabel ok={!!date}>
          {formattedDate || placeholder}
        </DateTimeLabel>
      </DateTimeButton>
      {show && (
        <DateTimePicker
          mode={mode}
          is24Hour
          value={date || new Date()}
          onChange={onChange}
          display="default"
        />
      )}
    </View>
  );
}
