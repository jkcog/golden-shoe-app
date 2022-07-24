import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editQuantity from '../actions/editQuantity';
import removeFromBag from '../actions/removeFromBag';
import { REMOVE_FROM_BAG } from '../reducers/contants';

const BagItem = ({ product, productIndex }) => {
  // const [quantity, setQuanitity] = useState(product.quantity);

  const dispatch = useDispatch();

  // const quantityState = useSelector((state) => state.bag[productIndex]);

  useEffect(() => {
    console.log(product);
    console.log('quant: ', product.quantity);
  });

  const updateQuantity = (e) => {
    const newQuant = e.target.value;
    dispatch(editQuantity(product._id, product.size, newQuant));
  };

  const removeItem = () => {
    console.log('remove item function');
    console.log({ id: product._id, size: product.size });
    dispatch({
      type: REMOVE_FROM_BAG,
      payload: { id: product._id, size: product.size },
    });
  };

  return (
    <div className="mb-12 border-b-2 pl-12">
      <div>
        <h1>{product.title}</h1>
        <h2>Size: {product.size}</h2>
        <select
          name=""
          id=""
          value={product.quantity}
          onChange={updateQuantity}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <h2>Quantity: {product.quantity}</h2>
        <Link to={`/product/${product._id}`}>
          <img
            className="w-48 h-48 object-cover"
            src={product.image}
            alt={product.title}
          />
        </Link>
        <button onClick={removeItem}>Remove from bag</button>
      </div>
    </div>
  );
};

export default BagItem;
