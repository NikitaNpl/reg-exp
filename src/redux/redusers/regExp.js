const initialState = {
  items: [],
  regExpIsLoaded: false
}

const regExp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RegExp': 
      return {
        ...state,
        items: action.payload,
        regExpIsLoaded: true
      }
    case 'SET_LOADED':
      return {
        ...state,
        regExpIsLoaded: action.payload
      }
    default: 
      return state;
  }
}

export default regExp;