import { ArrowLeft, Heart } from 'react-native-feather';
import React from 'react';

import { Button, Count, HeaderBar, Logo } from './styles';
import logo from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  previous?: boolean;
  count?: number;
  fav?: number;
};

const Header: React.FC<HeaderProps> = ({ previous, count, fav }) => {
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  return (
    <HeaderBar>
      {previous && (
        <Button onPress={back}>
          <ArrowLeft />
        </Button>
      )}
      <Logo source={logo} />
      {count && <Count>Total: {count}</Count>}
      {fav && (
        <Button>
          <Heart />
        </Button>
      )}
    </HeaderBar>
  );
};

export default Header;
