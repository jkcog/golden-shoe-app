import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BagIndicator from './BagIndicator.jsx';
import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <div className="bg-[#161616] text-white flex justify-around h-12">
        <Link to="/">Home</Link>
        <Link to="/category/women">Women</Link>
        <Link to="/category/men">Men</Link>
        <Link to="/category/boots">Boots</Link>
        <Link to="/bag">
          Bag <BagIndicator />
        </Link>
        <button
          onClick={() => {
            setShowSearch(true);
          }}
        >
          Search
        </button>
      </div>
      <div className={showSearch ? 'block' : 'hidden'}>
        <SearchBar setShowSearch={setShowSearch} />
      </div>
    </div>
  );
};

export default Navbar;
