import { REMOVE_FROM_BAG } from '../reducers/contants';

const removeFromBag = (id, size, dispatch) => {
  dispatch({
    type: REMOVE_FROM_BAG,
    payload: { id, size },
  });
};

export default removeFromBag;
