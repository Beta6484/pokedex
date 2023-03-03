import styled from 'styled-components/native';
import background from '../../assets/images/background.png';

export const Container = styled.View`
  flex: 1;
  background-color: #ececfb;
  padding: 40px 16px;
  background-image: url(${background});
  background-attachment: fixed;
  max-height: 100vh;
`;

export const Scroll = styled.FlatList`
  padding-top: 100px;
`;
