import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { BsTwitter, BsFacebook } from 'react-icons/bs';

import addToBag from '../actions/addToBag';
import fetchSingleProduct from '../actions/fetchSingleProduct';
import ReviewSummary from '../components/ReviewSummary';
import ProductToast from '../components/ProductToast';
import ImageCarousel from '../components/ImageCarousel';

const IndividualProduct = () => {
  const [size, setSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentProductState = useSelector((state) => state.singleProduct);
  const bagState = useSelector((state) => state.bag);

  const { product, loading, error } = currentProductState;
  const currentLocation = window.location.href;

  const addItem = () => {
    console.log('ADD ITEM!!!');
    console.log('bag add', bagState.bag);
    const existsInBag = bagState.bag.find((element) => {
      return element._id === id;
    });
    console.log('exists? ', existsInBag);
    let inStock = product.sizes[size] >= 1;
    console.log('in stock: ', inStock);
    console.log(
      'quant in stock: ',
      product.sizes[size] >= existsInBag?.quanitity
    );
    if (existsInBag) {
      console.log('exits in bag: ', existsInBag);
      console.log('exists quant: ', existsInBag.quantity);
    }
    if (existsInBag && existsInBag.quantity >= existsInBag.sizes[size]) {
      inStock = false;
    }
    console.log('in stock: ', inStock);

    if (size && inStock) {
      setErrorMessage('');
      dispatch(addToBag(id, size));
      ProductToast(product, size);
    } else if (!size) {
      setErrorMessage('Please select a size');
    } else {
      setErrorMessage('Product no longer available');
    }
  };

  useEffect(() => {
    console.log('single product');
    console.log('useEffect: ', id);
    console.log(loading);
    console.log(error);
    console.log(currentProductState);
    console.log(product);
    if (product) {
      console.log(product.images);
    }
    dispatch(fetchSingleProduct(id));

    console.log('location: ', currentLocation);
    console.log('location: ', window.location);
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
        <div>
          <div className="flex flex-col 2xl:flex-row gap-24 2xl:gap-0 items-center justify-around mt-24 mb-24 lg:mb-48">
            <div className="xl:w-1/2 flex justify-center items-center">
              {/* <img className="w-96" src={product.images[0]} alt={product.title} /> */}
              <ImageCarousel images={product.images} />
            </div>

            <div className="xl:w-1/2 lg:my-24 xl:my-0 px-12 md:px-24 lg:px-48 xl:px-24 text-center 2xl:text-left">
              <h1 className="text-4xl my-12 font-thin">{product.title}</h1>
              <p className="text-left text-md mb-12 lg:mb-8">
                {product.description}
              </p>
              <div>
                {product.sizes[size] < 10 ? (
                  <div className="text-red-700 text-center text-xl font-bold">
                    Low in stock
                  </div>
                ) : null}
                <select
                  className="mt-12 lg:mt-4 w-full text-xl mr-auto rounded-xl p-2 bg-white border-slate-200 border-2 "
                  onChange={(e) => {
                    setErrorMessage('');
                    setSize(e.target.value);
                  }}
                >
                  <option selected disabled hidden value="">
                    Select a size
                  </option>
                  {Object.keys(product.sizes).map((size, i) => {
                    return (
                      <>
                        {product.sizes[size] >= 1 ? (
                          <option value={size}>{size}</option>
                        ) : (
                          <option disabled value={size}>
                            {size}{' '}
                            <span className="text-red-200">Out of stock</span>
                          </option>
                        )}
                      </>
                    );
                  })}
                </select>
              </div>

              {errorMessage ? (
                <div className="bg-red-200 py-4 rounded-xl text-center mt-12">
                  {errorMessage}
                </div>
              ) : null}
              <button
                className="transition bg-slate-600 hover:bg-slate-500 text-white rounded-xl py-3 lg:py-4 xl:px-24 mt-12 lg:mt-24 text-xl w-full"
                onClick={addItem}
              >
                Add to bag
              </button>
              <div className="flex font-bold justify-center gap-12 mt-12 text-slate-700">
                <a
                  className="transition hover:text-slate-600"
                  href={`http://www.facebook.com/sharer.php?u=${currentLocation}`}
                  target="_blank"
                >
                  <BsFacebook size={25} />
                </a>
                <a
                  className="transition hover:text-slate-600"
                  href={`http://twitter.com/share?text=${product.title}&url=${currentLocation}`}
                  target="_blank"
                >
                  <BsTwitter size={25} />
                </a>
              </div>
              {/* {product.reviews.map((review, i) => {
              console.log(review);
              return <h1>{review.title}</h1>;
            })} */}
            </div>
          </div>
          <ReviewSummary product={product} />
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default IndividualProduct;
