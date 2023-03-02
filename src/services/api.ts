import { MainClient, NamedAPIResourceList } from 'pokenode-ts';

const api = new MainClient({
  cacheOptions: {
    maxAge: 5000,
    exclude: {
      query: false,
    },
  },
});

export const getPokemonList = async () => {
  await api.pokemon
    .listPokemonSpecies()
    .then((data: NamedAPIResourceList) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.error(error));
};
