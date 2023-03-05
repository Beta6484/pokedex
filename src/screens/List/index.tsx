import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import { pokemon } from '../../interfaces';
import { getPokeList } from '../../services/PokeApi';
import { Container } from './styles';

const List: React.FC = () => {
  const [pokeList, setPokelist] = useState<pokemon[]>();
  const [total, setTotal] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const limit = 12;

  const loadPokeList = async (offset: number, limit: number) => {
    await getPokeList(offset, limit).then((response) => {
      console.log(response);
      setPokelist(response.results);
      setTotal(response.count);
    });
  };

  useEffect(() => {
    loadPokeList(offset, limit);
  }, []);

  const paginate = (page: number) => {
    const interval: number = page === 1 ? 0 : (page - 1) * limit;

    setOffset(interval);
    loadPokeList(interval, limit);
  };

  return (
    <Container>
      <Header count={total} />
      <Cards data={pokeList} />
      <Pagination itemsPerPage={limit} totalItems={total} paginate={paginate} />
    </Container>
  );
};

export default List;
