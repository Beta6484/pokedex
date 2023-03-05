import React from 'react';

import { LoadScreen, LoadText } from './styles';

const Loading: React.FC = () => {
  return (
    <LoadScreen>
      <LoadText>Carregando...</LoadText>
    </LoadScreen>
  );
};

export default Loading;
