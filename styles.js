import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background: #fff;
`;

export const ModalButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  margin: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
`;
