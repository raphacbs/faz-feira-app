import {Product} from '../../types/Product';

export const setSearchTerm = (term: string) => ({
  type: 'SET_SEARCH_TERM',
  payload: term,
});

export const setSearchResults = (results: Array<Product>) => ({
  type: 'SET_SEARCH_RESULTS',
  payload: results,
});
