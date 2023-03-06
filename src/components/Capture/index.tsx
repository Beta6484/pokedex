import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

import Empty from '../../assets/images/pokeball-empty.png';
import Full from '../../assets/images/pokeball-full.png';
import { CaptureContainer, Pokeball } from './styles';

type CaptureProps = {
  id: number;
  big?: boolean;
};

const Capture: React.FC<CaptureProps> = ({ id, big }) => {
  const [captured, setCaptured] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>('');
  const { getItem, setItem } = useAsyncStorage('@captured');

  const writeCaptured = async (id: number) => {
    const list: number[] = value ? JSON.parse(value) : [];
    const found: any = list.find((item) => item === id);

    found ? list.splice(list.indexOf(id), 1) : list.push(id);

    await setItem(JSON.stringify(list));
    setValue(JSON.stringify(list));
    checkCaptured(id);
  };

  const readCaptured = async (id: number) => {
    const item = await getItem();

    setValue(item);
    checkCaptured(id);
  };

  const checkCaptured = async (id: number) => {
    const item = await getItem();
    const list: number[] = item ? JSON.parse(item) : [];

    list.indexOf(id) > -1 ? setCaptured(true) : setCaptured(false);
  };

  useEffect(() => {
    readCaptured(id);
  }, []);

  return (
    <CaptureContainer onPress={() => writeCaptured(id)}>
      <>
        {!captured && <Pokeball source={Empty} big={big} />}
        {captured && <Pokeball source={Full} big={big} />}
      </>
    </CaptureContainer>
  );
};

export default Capture;
