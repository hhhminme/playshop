import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { queryKey } from '../constants/constant';

interface ApiResponse {
  manitto: 'string';
  mission: 'string';
}

interface getManittoArgs {
  clickedName: string;
  sign: string;
}

const getManitto = async ({ clickedName, sign }: getManittoArgs) => {
  const { data } = await axios.get<ApiResponse>(
    `https://playshop.office.openur.biz/manitto?name=${clickedName}&secret=${sign}`
  );
  return data;
};

export const useManittoQuery = (
  clickedName: string,
  sign: string,
  options?: UseQueryOptions<
    ApiResponse,
    AxiosError,
    ApiResponse,
    readonly ['manitto']
  >
) => {
  return useQuery(
    queryKey.manitto,
    () => getManitto({ clickedName, sign }),
    options
  );
};
