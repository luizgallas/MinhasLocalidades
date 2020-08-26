import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF
`;

export const Text = styled.Text`
  font-size: 24px;
  flex: 1;
  align-self: center;
  padding-top: 32px;
  font-family: Signika-Bold;
  color: #191055;
  font-weight: bold;
  font-style: normal;
`;

export const List = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;