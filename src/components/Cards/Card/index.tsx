import { Heart } from 'react-native-feather';
import React from 'react';

import { pokemon } from '../../../interfaces';
import {
  CardContainer,
  CardHeader,
  Favorite,
  PokeID,
  Img,
  Name,
} from './styles';

type CardProps = {
  data: any;
  backGround?: string;
  fav?: boolean;
};

const Card: React.FC<CardProps> = ({ data, backGround, fav }) => {
  console.log(data);
  return (
    <CardContainer>
      <CardHeader>
        <PokeID>{data.num}</PokeID>
        <Favorite>{(fav && <Heart fill={'red'} />) || <Heart />}</Favorite>
      </CardHeader>
      {/* <Img source={data.sprites.front_default} /> */}
      <Name>{data.name}</Name>
    </CardContainer>
  );
};

export default Card;
