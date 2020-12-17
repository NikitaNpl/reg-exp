const initialState = {
  categories: [],
  sortBy: null,
  categoriesIsLoaded: false
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        categories: action.payload,
        categoriesIsLoaded: true
      }
    case 'SET_LOADED':
      return {
        ...state,
        categoriesIsLoaded: action.payload
      }
    default:
      return state;
  }
}

export default categories;