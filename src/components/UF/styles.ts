import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFFFFF;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: Signika-Bold;
  color: #E50191;
  font-weight: bold;
  font-style: normal;
`;

export const Button = styled.TouchableOpacity`
  background-color: #FFFF;
  border-style: solid;
  border-color: #191055;
  border-width: 2px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 8px;
  border-radius: 8px;
  padding-left: 16px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center
  padding-top: 16px;
  padding-bottom: 12px;
  padding-right: 16px;
  justify-content: space-between;
`;