import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: #FFFF;
`;

export const Text = styled.Text`
  font-size: 24px;
  align-self: center;
  padding-top: 32px;
  font-family: Signika-Bold;
  color: #191055;
  margin-bottom: 30px;
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;