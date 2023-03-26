import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useQuery} from 'react-query';
import api from '../../services/api';

type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductsState = {
  data: Product[];
  isLoading: boolean;
  error: string | null;
  query: string;
};

const initialState: ProductsState = {
  data: [],
  isLoading: false,
  error: null,
  query: '',
};
export const setQuery = createAction<string>('product/setQuery');

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

const {setLoading, setProducts, setError} = productsSlice.actions;

const fetchProducts = async (): Promise<Product[]> => {
  const {data} = await api.get(
    '/api/v1/products?pageNo=1&pageSize=10&code=7896024728012',
  );
  return data;
};

export const useProductsQuery = () => {
  return useQuery('products', fetchProducts);
};

export const productsThunks = {
  fetchProducts:
    () =>
    async (
      dispatch: (arg0: {
        payload: string | Product[] | undefined;
        type:
          | 'products/setLoading'
          | 'products/setProducts'
          | 'products/setError';
      }) => void,
    ) => {
      try {
        dispatch(setLoading());
        const products = await fetchProducts();
        dispatch(setProducts(products));
      } catch (error) {
        dispatch(setError((error as Error).message));
      }
    },
};

export default productsSlice.reducer;
