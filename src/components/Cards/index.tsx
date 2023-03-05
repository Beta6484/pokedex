import React from 'react';

import { pokemon } from '../../interfaces';
import Card from './Card';
import { CardList, Container } from './styles';

type CardsProps = {
  data?: pokemon[];
};

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <Container>
      <CardList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => <Card data={item} />}
      />
    </Container>
  );
};

export default Cards;
