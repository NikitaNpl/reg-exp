import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

export const fetchCategories = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(
    `/topic?_expand=color`
  ).then(({ data }) => {
    dispatch(setCategory(data));
  });
}

export const setSortBy = (obj) => ({
  type: 'SET_SORT_BY',
  payload: obj 
})

export const setCategory = (obj) => ({
  type: 'SET_CATEGORY',
  payload: obj
})