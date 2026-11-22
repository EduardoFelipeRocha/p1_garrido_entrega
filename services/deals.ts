export type GameDeal = {
  dealID: string;
  title: string;
  salePrice: string;
  normalPrice: string;
  savings: string;
  thumb: string;
  storeID: string;
};

export async function fetchGameDeals(): Promise<GameDeal[]> {
  const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=30&pageSize=12');
  if (!response.ok) throw new Error('Não foi possível carregar as ofertas agora.');
  const data: unknown = await response.json();
  if (!Array.isArray(data)) throw new Error('A resposta da loja veio em um formato inesperado.');
  return data as GameDeal[];
}
