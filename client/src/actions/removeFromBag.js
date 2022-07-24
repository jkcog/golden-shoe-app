import { REMOVE_FROM_BAG } from '../reducers/contants';

const removeFromBag = (id, size, dispatch) => {
  console.log('remove action');
  console.log('id', id);
  console.log('size', size);
  console.log('dispatch', dispatch);
  dispatch({
    type: REMOVE_FROM_BAG,
    payload: { id, size },
  });
};

export default removeFromBag;
