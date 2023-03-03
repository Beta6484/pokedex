import React, { useEffect, useState } from 'react';

import { Container, Scroll } from './styles';
import { getPokeList } from '../../services/PokeApi';
import { response, pokemon } from '../../interfaces';
import Header from '../../components/Header';
import Card from '../../components/Cards/Card';
import createWebpackConfigAsync from '@expo/webpack-config/webpack';

const List: React.FC = () => {
  const [pokeList, setPokelist] = useState<pokemon[]>();
  const [total, setTotal] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const limit = 12;

  const loadPokeList = async () => {
    const response: response = await getPokeList(offset, limit);
    setPokelist(response.results);
    setTotal(response.count);

    console.log(total);
    console.log(pokeList);
  };

  useEffect(() => {
    loadPokeList();
  }, []);

  return (
    <Container>
      <Header />
      <Header count={total} />
    </Container>
  );
};

export default List;
