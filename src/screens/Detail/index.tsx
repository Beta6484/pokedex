import React, { useState } from 'react';
import { ImageSourcePropType, Pressable } from 'react-native';

import Loading from '../../components/Loading';
import { pokemon } from '../../interfaces';
import { Container, Details, Image, Title } from './styles';

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
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Container bgColor={bgColor}>
      {loading && <Loading />}
      {!loading && (
        <Details>
          <Pressable onPress={() => close(true)}>
            <Title>Voltar</Title>
          </Pressable>
          <Title>{data.name}</Title>
          <Image source={imgURL} />
          <Title>Info...</Title>
        </Details>
      )}
    </Container>
  );
};

export default Detail;
