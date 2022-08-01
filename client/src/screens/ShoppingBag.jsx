import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BagItem from '../components/BagItem';
import BagTotal from '../components/BagTotal';
const ShoppingBag = () => {
  const bagState = useSelector((state) => state.bag);

  return (
    <>
      <div className="mb-48">
        {bagState.bag.length ? (
          bagState.bag.map((product, i) => {
            return <BagItem key={i} product={product} productIndex={i} />;
          })
        ) : (
          <p className="text-center text-3xl mt-24 font-thin">
            Shopping bag is empty
          </p>
        )}
      </div>
      <BagTotal total={bagState.total} />
    </>
  );
};

export default ShoppingBag;
