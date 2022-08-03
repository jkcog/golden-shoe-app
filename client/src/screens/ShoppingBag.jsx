import React from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import BagItem from '../components/BagItem';
import BagTotal from '../components/BagTotal';
const ShoppingBag = () => {
  const bagState = useSelector((state) => state.bag);

  const comingSoon = () => {
    return toast((t) => (
      <div
        className="p-4 text-slate-700 text-2xl cursor-pointer"
        onClick={() => toast.dismiss(t.id)}
      >
        Coming <b>soon!</b>
      </div>
    ));
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="mb-52 flex flex-col items-center">
        {bagState.bag.length ? (
          <>
            {bagState.bag.map((product, i) => {
              return <BagItem key={i} product={product} productIndex={i} />;
            })}
            <button className="success-btn mb-4" onClick={comingSoon}>
              Proceed to checkout
            </button>
          </>
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
