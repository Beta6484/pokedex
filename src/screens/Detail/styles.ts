import { Heart } from 'react-native-feather';
import styled from 'styled-components/native';

import background from '../../assets/images/background.png';

type ContainerProps = {
  bgColor?: string;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding: 40px 16px;
  background-color: ${(props) => `${props.bgColor}`};
  background-image: url(${background});
  background-attachment: fixed;
  max-height: 100vh;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Favorite = styled(Heart)`
  width: 20px;
  height: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Indice = styled.Text``;

export const Image = styled.Image`
  width: 220px;
  height: 220px;
`;

export const Subtitle = styled.Text``;

export const Info = styled.Text``;
