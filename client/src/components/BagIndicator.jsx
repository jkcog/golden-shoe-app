import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BagIndicator = () => {
  const bagState = useSelector((state) => state.bag);
  const [itemCount, setItemCount] = useState();
  useEffect(() => {
    let count = 0;
    console.log(bagState.bag);
    for (let item of bagState.bag) {
      console.log(item);
      count += parseInt(item.quantity);
    }
    setItemCount(count);
  }, [bagState]);

  return <div className="bg-red-400">{itemCount ? itemCount : ''}</div>;
};

export default BagIndicator;
