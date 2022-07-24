import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ shoe }) => {
  return (
    <Link to={`/product/${shoe._id}`} className="flex justify-center">
      <div className=" w-96 h-96 hover:opacity-80 transition">
        <img
          src={shoe.image}
          alt={shoe.title}
          className="rounded-xl h-full w-full object-cover"
        />
        <h1 className="text-2xl">{shoe.title}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
