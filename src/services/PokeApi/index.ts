import axios from 'axios';
import { response } from '../../interfaces';
import IDFromURL from '../../utils/returnIdFromURL';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const getList = async (offset?: number, limit?: number) => {
  const url =
    offset || limit
      ? `${BASE_URL}pokemon/?offset=${offset}&limit=${limit}`
      : `${BASE_URL}pokemon/`;

  const res = await axios.get(url).then((response) => {
    return response.data;
  });

  return await res;
};

const getDetail = async (data: response) => {
  for (let item of data.results) {
    const pokeItem = await axios.get(item.url);

    item.id = pokeItem.data.id;
    item.num = `#${IDFromURL(item.url)}`;
    item.favorite = undefined;
    item.moves = pokeItem.data.moves;
    item.sprites = pokeItem.data.sprites;
    item.stats = pokeItem.data.stats;
    item.types = pokeItem.data.types;
  }

  return data;
};

export const getPokeList = async (offset?: number, limit?: number) => {
  const list = await getList(offset, limit);
  const details = await getDetail(list);

  return details;
};
