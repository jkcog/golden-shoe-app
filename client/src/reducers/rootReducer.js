import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import shoppingBagReducer from './shoppingBagReducer';
import singleProductReducer from './singleProductReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  bag: shoppingBagReducer,
});

export default rootReducer;
