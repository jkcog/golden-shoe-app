import { ADD_TO_BAG, EDIT_QUANTITY, REMOVE_FROM_BAG } from './contants';

// If products in local storage then set as initial state
const initialBag = localStorage.getItem('shoppingBag')
  ? JSON.parse(localStorage.getItem('shoppingBag'))
  : { bag: [] };

const initState = initialBag;

const calcTotal = (currentBag) => {
  let subtotal = 0;
  for (let product of currentBag) {
    subtotal += parseInt(product.quantity) * product.price;
  }
  return subtotal;
};

const shoppingBagReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_BAG:
      const currentProduct = {
        ...action.payload.product,
        size: action.payload.size,
        quantity: 1,
      };
      let bagProducts = [...state.bag];
      const itemExists = state.bag.find(
        (product) =>
          product._id === currentProduct._id &&
          product.size === currentProduct.size
      );
      if (itemExists) {
        // If sufficient stock for current size, update quantity
        const newQuant =
          itemExists.sizes[currentProduct.size] > currentProduct.quantity
            ? parseInt(itemExists.quantity) + 1
            : itemExists.quantity;
        currentProduct.quantity = newQuant;

        // If item already exists in bag, remove to replace with updated product
        bagProducts = state.bag.filter(
          (product) =>
            product._id !== currentProduct._id ||
            product.size !== currentProduct.size
        );
      }
      bagProducts.push(currentProduct);
      localStorage.setItem(
        'shoppingBag',
        JSON.stringify({ bag: bagProducts, total: calcTotal(bagProducts) })
      );
      return { bag: bagProducts, total: calcTotal(bagProducts) };

    case EDIT_QUANTITY:
      // If id and size match and if there is sufficient stock, update product
      const bagUpdate = state.bag.map((product) => {
        return product['_id'] === action.payload.product._id &&
          product['size'] === action.payload.size &&
          product.sizes[action.payload.size] >= action.payload.quantity
          ? {
              ...product,
              quantity: parseInt(
                action.payload.quantity ? action.payload.quantity : 0
              ),
            }
          : product;
      });
      localStorage.setItem(
        'shoppingBag',
        JSON.stringify({
          bag: bagUpdate,
          total: calcTotal(bagUpdate),
        })
      );
      return {
        bag: bagUpdate,
        total: calcTotal(bagUpdate),
      };

    case REMOVE_FROM_BAG:
      const filteredBag = state.bag.filter(
        (product) =>
          product._id !== action.payload.id ||
          product.size !== action.payload.size
      );
      localStorage.setItem(
        'shoppingBag',
        JSON.stringify({ bag: filteredBag, total: calcTotal(filteredBag) })
      );
      return { bag: filteredBag, total: calcTotal(filteredBag) };
    default:
      return state;
  }
};

export default shoppingBagReducer;
