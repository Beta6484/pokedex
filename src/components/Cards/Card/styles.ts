import { Heart } from 'react-native-feather';
import styled from 'styled-components/native';

type CardContainerProps = {
  bgColor: string;
};

export const CardContainer = styled.Pressable<CardContainerProps>`
  padding: 5px 10px;
  border: solid 1px #cccccc;
  border-radius: 5px;
  background-color: ${(props) => `${props.bgColor}99`};
  align-items: center;
  margin: 0 5px 10px;
  flex: 2;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PokeID = styled.Text``;

export const Favorite = styled(Heart)`
  width: 20px;
  height: 20px;
`;

export const Img = styled.Image`
  width: 64px;
  height: 64px;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-weight: bold;
`;
