import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { ArrowLeft, Star } from 'react-native-feather';
import Capture from '../../components/Capture';

import { pokemon } from '../../interfaces';
import { convertHeight, convertWeight } from '../../utils/converUnits';
import GetColorByPokemonType from '../../utils/getColorByPokemonType';
import {
  Button,
  Container,
  Details,
  Header,
  HeaderInfo,
  Image,
  Indice,
  Info,
  InfoTitle,
  InfoValue,
  Subtitle,
  Title,
  Type,
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

  const mapMoves = (data: [{ move: { name: string } }]) => {
    const comps: any[] = [];
    data.forEach((value: any, key) => {
      const move: string = value.move.name.replace('-', ' ');
      comps.push(<InfoValue key={key}>{move}, </InfoValue>);
    });
    return comps;
  };

  const mapTypes = (data: [{ type: { name: string } }]) => {
    const comps: any[] = [];
    data.forEach((value: any, key) => {
      const type: string = value.type.name;
      comps.push(
        <Type key={key} typeColor={GetColorByPokemonType(type)}>
          {type}
        </Type>
      );
    });
    return comps;
  };

  const mapStats = (data: [{ base_stat: number; stat: { name: string } }]) => {
    const comps: any[] = [];
    data.forEach((value: any, key) => {
      const statName: string = value.stat.name.replace('-', ' ');
      const statValue: string = value.base_stat;
      comps.push(
        <Info key={key}>
          <InfoTitle>{statName}:</InfoTitle>
          <InfoValue>{statValue}</InfoValue>
        </Info>
      );
    });
    return comps;
  };

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
        <Info>
          <InfoTitle>Specie:</InfoTitle>
          <InfoValue>{data.species.name}</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Types:</InfoTitle>
          {mapTypes(data.types)}
        </Info>
        <Info>
          <InfoTitle>Height:</InfoTitle>
          <InfoValue>{convertHeight(data.height)} mt</InfoValue>
        </Info>
        <Info>
          <InfoTitle>Weight:</InfoTitle>
          <InfoValue>{convertWeight(data.weight)} kg</InfoValue>
        </Info>
        <Subtitle>
          <Star fill={'#FFBD1B'} width={15} height={15} />
          Stats
        </Subtitle>
        {mapStats(data.stats)}
        <Subtitle>
          <Star fill={'#FFBD1B'} width={15} height={15} />
          Moves
        </Subtitle>
        <Info>{mapMoves(data.moves)}</Info>
      </Details>
    </Container>
  );
};

export default Detail;
