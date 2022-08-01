import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BagIndicator = () => {
  const bagState = useSelector((state) => state.bag);
  const [itemCount, setItemCount] = useState();
  useEffect(() => {
    let count = 0;
    for (let item of bagState.bag) {
      count += parseInt(item.quantity);
    }
    setItemCount(count);
  }, [bagState]);

  return (
    <>
      {itemCount ? (
        <>
          <span className="absolute -mt-4 ml-5 px-1.5 text-center font-bold bg-slate-600 text-white rounded ml-2 text-sm">
            {itemCount}
          </span>
        </>
      ) : null}
    </>
  );
};

export default BagIndicator;
