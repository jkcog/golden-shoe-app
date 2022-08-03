import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_RECEIVED,
  FETCH_PRODUCTS_ERROR,
} from '../reducers/contants';

const fetchProducts = (query, type, sort, page) => {
  const dispatchProducts = async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUESTED });

    const url = sort
      ? `${process.env.REACT_APP_API_URL}/api/products/${type}?query=${query}&sortBy=${sort.field}&sortDir=${sort.direction}&page=${page}`
      : `${process.env.REACT_APP_API_URL}/api/products/${type}?query=${query}&page=${page}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_PRODUCTS_RECEIVED, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error });
      });
  };
  return dispatchProducts;
};

export default fetchProducts;
