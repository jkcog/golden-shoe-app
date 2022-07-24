import { ADD_TO_BAG, EDIT_QUANTITY, REMOVE_FROM_BAG } from './contants';

const initState = {
  bag: [],
};

const shoppingBagReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_BAG:
      const currentProduct = {
        ...action.payload.product,
        size: action.payload.size,
        quantity: 1,
      };
      console.log('state.bag', state.bag);
      let bagProducts = [...state.bag];
      console.log('current product', currentProduct);
      console.log(currentProduct.quantity);
      console.log('current product', currentProduct._id);
      const itemExists = state.bag.find(
        (product) =>
          product._id === currentProduct._id &&
          product.size === currentProduct.size
      );
      if (itemExists) {
        console.log('exists');
        console.log(currentProduct.quantity);
        const newQuant = parseInt(currentProduct.quantity) + 1;
        console.log('new quant', newQuant);
        currentProduct.quantity = newQuant;
        console.log(currentProduct.quantity);
        bagProducts = state.bag.filter(
          (product) =>
            product._id !== currentProduct._id ||
            product.size !== currentProduct.size
        );
      }
      bagProducts.push(currentProduct);
      console.log('bag products', bagProducts);
      console.log(bagProducts);
      return { bag: bagProducts };

    case EDIT_QUANTITY:
      console.log(action.payload);
      const productUpdate = {
        ...action.payload.product,
        size: action.payload.size,
        quantity: parseInt(action.payload.quantity),
      };
      console.log(productUpdate);
      productUpdate.quantity = action.payload.quantity;
      console.log(state.bag);

      const bagUpdate = state.bag.map((product) => {
        console.log(product);
        console.log('action payload: ', action.payload.size);
        return product['_id'] === action.payload.product._id &&
          product['size'] === action.payload.size
          ? {
              ...product,
              quantity: parseInt(action.payload.quantity),
            }
          : product;
      });
      return {
        bag: bagUpdate,
      };
    case REMOVE_FROM_BAG:
      console.log(state.bag);
      const filteredBag = state.bag.filter(
        (product) =>
          product._id !== action.payload.id ||
          product.size !== action.payload.size
      );
      console.log(filteredBag);
      return { bag: filteredBag };
    default:
      return state;
  }
};

export default shoppingBagReducer;
