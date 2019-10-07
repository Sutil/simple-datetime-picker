import styled from 'styled-components/native';

export const DateTimeButton = styled.TouchableOpacity`
  height: 50px;
  border-radius: 12px;
  border: 1px;
  border-color: #999;
  padding: 0 10px;
  justify-content: center;
`;

export const DateTimeLabel = styled.Text`
  font-size: 18px;
  color: ${props => (props.ok ? '#333' : '#999')};
`;
