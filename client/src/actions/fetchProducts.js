import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_RECEIVED,
  FETCH_PRODUCTS_ERROR,
} from '../reducers/contants';

const fetchProducts = (query, type, sort) => {
  console.log(query, type);
  const dispatchProducts = async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUESTED });
    console.log('sort fetch', sort);
    const url = sort
      ? `/api/products/${type}/${query}/sort/${sort.field}/${sort.direction}`
      : `/api/products/${type}/${query}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: FETCH_PRODUCTS_RECEIVED, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error });
      });
  };
  return dispatchProducts;
};

export default fetchProducts;
