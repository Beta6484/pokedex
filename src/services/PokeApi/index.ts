import axios from 'axios';
import { pokemon } from '../../interfaces';
import IDFromURL from '../../utils/returnIdFromURL';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokeList = async (offset?: number, limit?: number) => {
  const url =
    offset || limit
      ? `${BASE_URL}pokemon/?offset=${offset}&limit=${limit}`
      : `${BASE_URL}pokemon/`;

  try {
    const list = await axios.get(url).then((res) => {
      res.data.results.map(async (item: pokemon) => {
        const pokeItem = await axios.get(item.url);

        item.id = pokeItem.data.id;
        item.num = `#${IDFromURL(item.url)}`;
        item.moves = pokeItem.data.moves;
        item.sprites = pokeItem.data.sprites;
        item.stats = pokeItem.data.stats;
        item.types = pokeItem.data.types;
      });

      return res.data;
    });

    return list;
  } catch (error) {
    console.error(error);
  }
};
