import { ADD_TO_BAG } from '../reducers/contants';

const addToBag = (id, size) => {
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
        dispatch({ type: ADD_TO_BAG, payload: { product: data, size: size } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return dispatchBag;
};

export default addToBag;
