import styled from 'styled-components/native';

type PokeballProps = {
  big?: boolean;
};

export const CaptureContainer = styled.Pressable`
  border-radius: 5px;
  background-color: transparent;
  padding: 2px;
`;

export const Pokeball = styled.Image<PokeballProps>`
  width: ${(props) => (props.big ? '40px' : '20px')};
  height: ${(props) => (props.big ? '40px' : '20px')};
`;
