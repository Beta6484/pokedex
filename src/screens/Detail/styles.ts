import styled from 'styled-components/native';

import background from '../../assets/images/background.png';

type ContainerProps = {
  bgColor?: string;
};

type TypeProps = {
  typeColor?: string;
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

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderInfo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  padding: 2px 16px;
`;

export const Button = styled.Pressable`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.disabled ? '#999999' : 'inherit')};
  background-color: ${(props) =>
    props.disabled ? 'rgba(169,169,169, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Indice = styled.Text`
  font-face: monospace;
  font-size: 16px;
`;

export const Image = styled.Image`
  width: 220px;
  height: 220px;
`;

export const Subtitle = styled.Text`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  margin: 10px 0;
`;

export const Info = styled.Text`
  font-size: 16px;
  span: {
    font-weight: bold;
  }
`;

export const Type = styled.Text<TypeProps>`
  padding: 2px 4px;
  border-radius: 50%;
  background-color: ${(props) => `${props.typeColor}`};
`;
