export type response = {
  count: number;
  results: [pokemon];
  next?: string;
  previous?: string;
};

export type pokemon = {
  id: number;
  name: string;
  url: string;
  height: number;
  weight: number;
  num?: string;
  favorite?: boolean;
  moves: [
    {
      move: {
        name: string;
      };
    }
  ];
  species: {
    // Dados de eggs_group
    name: string;
  };
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
};

export type Color = { [propKey: string]: string };
