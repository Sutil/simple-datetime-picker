import React, { useState, useMemo } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format as dateFormat } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  ModalContainer,
  ModalContent,
  ModalButtons,
  Button,
  ButtonText,
} from './styles';

export default function SimpleDatetimePicker({
  date,
  onValueChange,
  placeholder,
  style,
  format,
}) {
  const [show, setShow] = useState(false);
  const [_date, _setDate] = useState(date);

  const formattedDate = useMemo(() => {
    return date
      ? dateFormat(date, format || 'dd/MM/yyyy HH:mm', { locale: pt })
      : '';
  }, [date]);

  function showNow() {
    setShow(true);
  }

  function showDate() {
    showNow();
  }

  function handleSetDate(value) {
    const newDate = new Date(value);
    _setDate(newDate);
  }

  function onChange(event, value) {
    value = value || date;

    handleSetDate(value);
  }

  function handleSubmit() {
    onValueChange(_date);
    setShow(false);
  }

  return (
    <View>
      <TouchableOpacity onPress={showDate}>
        <Text style={style} ok={!!date}>
          {formattedDate || placeholder}
        </Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={show} transparent>
        <ModalContainer>
          <ModalContent>
            <DateTimePicker
              mode="datetime"
              is24Hour
              value={_date || new Date()}
              onChange={onChange}
              display="default"
            />
            <ModalButtons>
              <Button onPress={() => setShow(false)}>
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button onPress={handleSubmit}>
                <ButtonText>ok</ButtonText>
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
}
