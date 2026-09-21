export type Game = {
  id: string;
  title: string;
  genre: string;
  rating: string;
  accent: string;
  status?: string;
};

export const games: Game[] = [
  { id: 'starfield', title: 'Starfield', genre: 'RPG espacial', rating: '4.8', accent: '#6544a5', status: 'Disponível' },
  { id: 'forza', title: 'Forza Horizon 5', genre: 'Corrida', rating: '4.7', accent: '#d65c25', status: 'Disponível' },
  { id: 'hifi', title: 'Hi-Fi RUSH', genre: 'Ação e ritmo', rating: '4.6', accent: '#e94b8b', status: 'Novo' },
  { id: 'halo', title: 'Halo Infinite', genre: 'Tiro', rating: '4.5', accent: '#3d806e', status: 'Instalado' },
];