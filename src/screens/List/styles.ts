import styled from "styled-components/native";
import background from "../../assets/images/background.png";

export const Container = styled.View`
  flex: 1;
  background-color: #ececfb;
  padding: 40px 16px;
  background-image: url(${background});
`;

export const Logo = styled.Image`
  width: 167px;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;
