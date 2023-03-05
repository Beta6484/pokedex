import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { pokemon } from '../../interfaces';
import { getPokeList } from '../../services/PokeApi';
import { Container } from './styles';

const List: React.FC = () => {
  const [pokeList, setPokelist] = useState<pokemon[]>();
  const [total, setTotal] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const limit = 12;

  const loadPokeList = async (offset: number, limit: number) => {
    setLoading(true);
    const response = await getPokeList(offset, limit);

    setPokelist(response.results);
    setTotal(response.count);
    setLoading(false);
  };

  useEffect(() => {
    loadPokeList(offset, limit);
  }, []);

  const paginate = (page: number) => {
    const interval: number = page === 1 ? 0 : (page - 1) * limit;

    setCurrPage(page);
    setOffset(interval);
    loadPokeList(interval, limit);
  };

  return (
    <Container>
      <Header count={total} />
      {loading && <Loading />}
      {!loading && (
        <>
          <Cards data={pokeList} />
          <Pagination
            currPage={currPage}
            itemsPerPage={limit}
            totalItems={total}
            paginate={paginate}
          />
        </>
      )}
    </Container>
  );
};

export default List;
