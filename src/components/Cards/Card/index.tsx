import React, { useState } from 'react';
import { ImageSourcePropType, Modal } from 'react-native';

import { pokemon } from '../../../interfaces';
import Detail from '../../../screens/Detail';
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <CardContainer onPress={() => setModalVisible(true)} bgColor={bgColor}>
        <CardHeader>
          <PokeID>{data.num}</PokeID>
          <Favorite fill={(data.favorite && 'red') || 'none'} />
        </CardHeader>
        <Img source={imgURL} />
        <Name>{data.name}</Name>
      </CardContainer>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Detail
          data={data}
          bgColor={bgColor}
          close={() => setModalVisible(false)}
        />
      </Modal>
    </>
  );
};

export default Card;
