import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFFFFF;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: Signika-SemiBold;
  color: #E50191;
  text-align: center;
`;

export const CityContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 12px 16px;
  border: 2px solid #191055;
  border-radius: 8px;
  margin: 0px 32px 8px 32px;
`;
