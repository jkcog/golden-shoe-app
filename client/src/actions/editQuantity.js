import { EDIT_QUANTITY } from '../reducers/contants';

const editQuantity = (id, size, quantity) => {
  const dispatchBag = async (dispatch) => {
    fetch(`/api/products/${id}`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: EDIT_QUANTITY,
          payload: { product: data, size, quantity },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return dispatchBag;
};

export default editQuantity;
