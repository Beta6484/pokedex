import styled from 'styled-components/native';

type ButtonProps = {
  disabled?: boolean;
};

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const Button = styled.Pressable`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.disabled ? '#999999' : 'inherit')};
  background-color: ${(props) =>
    props.disabled ? 'rgba(169,169,169, 0.6)' : 'rgba(33, 150, 243, 0.6)'};
  justify-content: center;
  align-items: center;
`;

export const CurrPage = styled.Text`
  font-size: 18px;
`;
