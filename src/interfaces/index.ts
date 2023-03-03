export type response = {
  count: number;
  results: [pokemon];
};

export type pokemon = {
  id?: number;
  name: string;
  url: string;
  num?: string;
  moves?: [
    {
      move: {
        name: string;
      };
    }
  ];
  species?: {
    // Dados de eggs_group
    id: number;
    pokemon_species: [
      {
        name: string;
      }
    ];
  };
  sprites: {
    front_default: string;
  };
  stats?: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types?: [
    {
      type: {
        name: string;
      };
    }
  ];
};
