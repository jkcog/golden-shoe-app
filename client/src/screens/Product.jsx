import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import addToBag from '../actions/addToBag';
import fetchSingleProduct from '../actions/fetchSingleProduct';
import ReviewSummary from '../components/ReviewSummary';

const IndividualProduct = () => {
  const [size, setSize] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentProductState = useSelector((state) => state.singleProduct);

  const { product, loading, error } = currentProductState;

  const addItem = () => {
    if (size) {
      dispatch(addToBag(id, size));
    }
  };

  useEffect(() => {
    console.log('single product');
    console.log('useEffect: ', id);
    console.log(loading);
    console.log(error);
    console.log(currentProductState);
    console.log(product);
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  return (
    <div>
      {!product && (loading || error) ? (
        <div className="text-center text-xl pt-24">
          {loading ? (
            <span className="font-bold">Loading...</span>
          ) : (
            <span className="font-bold">
              An error occured while fetching product
            </span>
          )}
        </div>
      ) : (
        <div className="flex justify-around">
          <div className="h-[900px] w-1/2 flex justify-center items-center">
            <img className="w-96" src={product.image} alt={product.title} />
          </div>
          <div className="w-1/2 px-8 text-center">
            <h1 className="text-4xl my-32">{product.title}</h1>
            <p>{product.description}</p>
            <div>
              <select
                className="mt-12"
                onChange={(e) => setSize(e.target.value)}
              >
                <option selected disabled hidden>
                  Select a size
                </option>
                {Object.keys(product.sizes).map((size, i) => {
                  return (
                    <option disabled={product.sizes[size] < 1} value={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              className={
                size
                  ? 'bg-black text-white rounded-xl py-2 px-4 mt-12'
                  : 'opacity-50 bg-black text-slate-100 rounded-xl mt-12'
              }
              onClick={addItem}
              disabled={size ? false : true}
            >
              Add to bag
            </button>
            {/* {product.reviews.map((review, i) => {
              console.log(review);
              return <h1>{review.title}</h1>;
            })} */}
            <ReviewSummary product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualProduct;
