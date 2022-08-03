import {
  FETCH_SINGLE_PRODUCT_REQUESTED,
  FETCH_SINGLE_PRODUCT_RECEIVED,
  FETCH_SINGLE_PRODUCT_ERROR,
} from '../reducers/contants';

const fetchSingleProduct = (id) => {
  const dispatchProducts = async (dispatch) => {
    dispatch({ type: FETCH_SINGLE_PRODUCT_REQUESTED });
    fetch(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_SINGLE_PRODUCT_RECEIVED, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: FETCH_SINGLE_PRODUCT_ERROR, payload: error });
      });
  };
  return dispatchProducts;
};

export default fetchSingleProduct;
