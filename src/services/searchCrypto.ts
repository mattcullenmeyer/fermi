import useAxios, { RequestTypes, ResponseBody } from './useAxios';

export interface Crypto {
  id: number;
  symbol: string;
  name: string;
  slug: string;
}

interface SearchCryptoParameters {
  searchTerm: string;
}

export const searchCrypto = async ({
  searchTerm,
}: SearchCryptoParameters): Promise<ResponseBody<Crypto[]>> => {
  const response = await useAxios<Crypto[]>({
    path: 'crypto',
    method: RequestTypes.Get,
    params: {
      search: searchTerm,
    },
  });

  return response;
};
