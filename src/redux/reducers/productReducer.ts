const initialState = {
  searchTerm: '',
  searchResults: [],
};

const reducer = (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {...state, searchTerm: action.payload};
    case 'SET_SEARCH_RESULTS':
      console.log('action', action);
      return {...state, searchResults: action.payload};
    default:
      return state;
  }
};

export default reducer;
