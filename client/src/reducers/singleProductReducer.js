import {
  FETCH_SINGLE_PRODUCT_REQUESTED,
  FETCH_SINGLE_PRODUCT_RECEIVED,
  FETCH_SINGLE_PRODUCT_ERROR,
} from './contants';

const initState = {
  singleProduct: { loading: true },
};

const singleProductReducer = (state = initState.singleProduct, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT_REQUESTED:
      return { ...state, loading: true };
    case FETCH_SINGLE_PRODUCT_RECEIVED:
      return { loading: false, product: action.payload };
    case FETCH_SINGLE_PRODUCT_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default singleProductReducer;
