import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { ArrowLeft, Star } from 'react-native-feather';
import Capture from '../../components/Capture';

import { pokemon } from '../../interfaces';
import {
  Button,
  Container,
  Details,
  Header,
  HeaderInfo,
  Image,
  Indice,
  Subtitle,
  Title,
} from './styles';

type DetailProps = {
  data: pokemon;
  bgColor?: string;
  close(modalVisible: boolean): void;
};

const Detail: React.FC<DetailProps> = ({ data, bgColor, close }) => {
  const imgURL =
    (data.sprites?.other['official-artwork']
      .front_default as ImageSourcePropType) ||
    (data.sprites?.front_default as ImageSourcePropType);

  return (
    <Container bgColor={bgColor}>
      <Header>
        <Button onPress={() => close(true)}>
          <ArrowLeft />
        </Button>
        <HeaderInfo>
          <Title>{data.name}</Title>
          <Indice>{data.num}</Indice>
        </HeaderInfo>
        <Capture id={data.id} big={true} />
      </Header>
      <Image source={imgURL} />
      <Details>
        <Subtitle>
          <Star fill={'#FFBD1B'} width={15} height={15} />
          Basic Information
        </Subtitle>
      </Details>
    </Container>
  );
};

export default Detail;
