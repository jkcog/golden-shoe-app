import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import editQuantity from '../actions/editQuantity';
import { REMOVE_FROM_BAG } from '../reducers/contants';

const BagItem = ({ product, productIndex }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const updateQuantity = (e) => {
    const newQuant = e.target.value;
    if (newQuant < 20 && newQuant <= product.sizes[product.size]) {
      setErrorMessage('');
      dispatch(editQuantity(product._id, product.size, newQuant));
    } else if (newQuant > product.sizes[product.size]) {
      setErrorMessage('Insufficient stock');
    }
  };

  const removeItem = () => {
    dispatch({
      type: REMOVE_FROM_BAG,
      payload: { id: product._id, size: product.size },
    });
  };

  return (
    <div className="mb-8 border-b-2 lg:pl-12 mt-12 py-8 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-12 lg:mb-0">
          <Link to={`/product/${product._id}`}>
            <img
              className="w-48 h-48 object-cover object-bottom mb-4"
              src={product.images[0]}
              alt={product.title}
            />
          </Link>

          <button className="text-red-700 font-semibold" onClick={removeItem}>
            Remove from bag
          </button>
        </div>
        <div className="flex flex-col gap-4 lg:gap-0 items-center lg:items-start h-48 lg:mr-auto lg:ml-12 w-48">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <h2>Size: {product.size}</h2>
          <h2>Quantity: {product.quantity}</h2>
        </div>
        <select
          className="w-24 mb-8 lg:mb-0 lg:mr-auto rounded-xl p-2 bg-white border-slate-200 border-2"
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
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <h2 className="justify-self-end lg:mr-12 text-2xl">
          £{parseInt(product.price) * parseInt(product.quantity)}
        </h2>
      </div>
      {errorMessage ? (
        <div
          className="error-cont w-52 mx-auto cursor-pointer"
          onClick={() => setErrorMessage('')}
        >
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
};

export default BagItem;
