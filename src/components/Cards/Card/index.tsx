import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { pokemon } from '../../../interfaces';
import GetColorByPokemonType from '../../../utils/getColorByPokemonType';

import {
  CardContainer,
  CardHeader,
  Favorite,
  Img,
  Name,
  PokeID,
} from './styles';

type CardProps = {
  data: pokemon;
};

const Card: React.FC<CardProps> = ({ data }) => {
  const imgURL = data.sprites?.front_default as ImageSourcePropType;
  const type = (data.types && data.types[0].type?.name) || '#FFFFFF';
  const bgColor = GetColorByPokemonType(type);

  return (
    <CardContainer bgColor={bgColor}>
      <CardHeader>
        <PokeID>{data.num}</PokeID>
        <Favorite fill={(data.favorite && 'red') || 'none'} />
      </CardHeader>
      <Img source={imgURL} />
      <Name>{data.name}</Name>
    </CardContainer>
  );
};

export default Card;
