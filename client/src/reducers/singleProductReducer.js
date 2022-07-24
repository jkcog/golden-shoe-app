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
      console.log('single product requested');
      return { ...state, loading: true };
    case FETCH_SINGLE_PRODUCT_RECEIVED:
      console.log('single received');
      return { loading: false, product: action.payload };
    case FETCH_SINGLE_PRODUCT_ERROR:
      console.log('single product error ');
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default singleProductReducer;
