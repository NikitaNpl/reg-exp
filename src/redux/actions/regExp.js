import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

export const fetchRegExp = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(
    `/carts?_expand=color`
  ).then(({ data }) => {
    dispatch(setRegExp(data));
  });
}

export const setRegExp = (items) => ({
  type: 'SET_RegExp',
  payload: items,
})