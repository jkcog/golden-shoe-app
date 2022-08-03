import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ shoe }) => {
  return (
    <Link to={`/product/${shoe._id}`} className="flex justify-center mb-32">
      <div className="product-card">
        <img
          src={shoe.images[0]}
          alt={shoe.title}
          className="rounded-xl h-full w-full object-cover object-bottom px-2"
        />
        <h1 className="text-2xl font-thin">{shoe.title}</h1>
        <p className="text-xl font-semibold text-slate-700">£{shoe.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
