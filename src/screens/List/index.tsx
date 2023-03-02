import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { Container, Logo, Title } from './styles';
import { getPokemonList } from '../../services/api';
import logo from '../../assets/images/logo.png';

const List: React.FC = () => {
  const [pokeList, setPokelist] = useState([]);
  const [total, setTotal] = useState(0);
  const [prev, setPrev] = useState('');
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function loadPokeList() {
    if (loading || (total > 0 && pokeList.length === total)) {
      return;
    }

    setLoading(true);
  }

  getPokemonList();
  return (
    <Container>
      <Logo source={logo} />
      <Title>{}</Title>
    </Container>
  );
};

export default List;
