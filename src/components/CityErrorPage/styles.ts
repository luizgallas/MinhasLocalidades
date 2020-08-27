import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
    flex: 1;
    background-color: #FFFF;
`;

export const Title = styled.Text`
  font-size: 24px;
  align-self: center;
  padding-top: 32px;
  font-family: Signika-Bold;
  color: #191055;
  margin-bottom: 32px;
`;

export const Text = styled.Text`
    font-family: Signika-Bold;
    font-size: 16px;
    text-align: center;
    color: #191055;
    line-height: 20px;

    margin-right: 32px;
    margin-left: 32px;
    margin-bottom: 32px;
`;

export const StopIcon = styled(Icon).attrs({
  name: 'hand-left-outline',
  color:"#E50191",
  size: 100
})`
  align-self: center;
  padding-top: 16px;

`;
