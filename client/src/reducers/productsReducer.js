import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_RECEIVED,
  FETCH_PRODUCTS_ERROR,
} from './contants';

const initState = {
  products: [],
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUESTED:
      return { loading: true, products: [] };
    case FETCH_PRODUCTS_RECEIVED:
      return {
        loading: false,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    case FETCH_PRODUCTS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
