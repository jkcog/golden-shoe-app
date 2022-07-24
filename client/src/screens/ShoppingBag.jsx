import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BagItem from '../components/BagItem';
const ShoppingBag = () => {
  const bagState = useSelector((state) => state.bag);

  useEffect(() => {
    console.log('bag', bagState.bag);
  });

  return (
    <div>
      {bagState.bag.length ? (
        bagState.bag.map((product, i) => {
          return <BagItem key={i} product={product} productIndex={i} />;
        })
      ) : (
        <p>Shopping bag is empty</p>
      )}
    </div>
  );
};

export default ShoppingBag;
