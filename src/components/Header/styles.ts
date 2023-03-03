import styled from 'styled-components/native';

export const HeaderBar = styled.View`
  width: calc(100vw - 32px);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  position: fixed;
`;

export const Logo = styled.Image`
  width: 167px;
  height: 40px;
`;

export const Button = styled.TouchableHighlight`
  width: 40px;
  height: 40px;
  border: solid 1px #000000;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
