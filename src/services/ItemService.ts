import {useQuery} from 'react-query';
import axios from 'axios';

interface Item {
  id: number;
  name: string;
  barcode: string;
}

const getItems = async (): Promise<Item[]> => {
  const {data} = await axios.get<Item[]>('/api/items');
  return data;
};

export const useGetItems = () => {
  return useQuery('items', getItems);
};
