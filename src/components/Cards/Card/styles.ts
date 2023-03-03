import { Heart } from 'react-native-feather';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  padding: 5px;
  border: solid 1px #000000;
  border-radius: 5px;
  background-color: #ffffff;
  align-items: center;
  margin-bottom: 16px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: align-between;
  align-items: center;
`;

export const PokeID = styled.Text``;

export const Favorite = styled(Heart)``;

export const Img = styled.Image``;

export const Name = styled.Text``;
