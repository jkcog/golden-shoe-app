import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch, BsBag } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import BagIndicator from './BagIndicator.jsx';
import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showKids, setShowKids] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  const collapseOnNavigate = () => {
    setShowKids(false);
    setShowNav(false);
  };

  return (
    <>
      <div className="bg-slate-300 flex flex-col xl:flex-row gap-12 py-8 xl:py-12 xl:gap-0 xl:py-0 h-auto xl:h-24 items-center justify-around text-2xl font-thin w-full min-w-full">
        {windowWidth < 1280 ? (
          <button
            className="ml-auto mr-12"
            onClick={() => setShowNav(!showNav)}
          >
            <AiOutlineMenu size={30} />
          </button>
        ) : null}
        {windowWidth < 1280 && !showNav ? null : (
          <>
            <NavLink
              className="transition hover:opacity-70 border-4 p-2 border-slate-400 font-bold text-amber-500"
              to="/"
              onClick={collapseOnNavigate}
            >
              Golden Shoes
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b border-slate-400'
                  : 'transition hover:opacity-70'
              }
              to="/category/women"
              onClick={collapseOnNavigate}
            >
              Women
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b border-slate-400'
                  : 'transition hover:opacity-70'
              }
              to="/category/men"
              onClick={collapseOnNavigate}
            >
              Men
            </NavLink>
            <div>
              <p
                className="transition hover:opacity-70 cursor-pointer"
                onClick={() => setShowKids(!showKids)}
              >
                Kids
              </p>
              {showKids ? (
                <div className="absolute z-10 bg-slate-300 mt-4 p-8 px-12 text-xl flex flex-col justify-between shadow-2xl border-l-4 border-slate-400">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'border-b border-slate-400 mb-8'
                        : 'transition hover:opacity-70 mb-8'
                    }
                    to="/category/girls"
                    onClick={collapseOnNavigate}
                  >
                    Girls
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'border-b border-slate-400 mt-8'
                        : 'transition hover:opacity-70 mt-8'
                    }
                    to="/category/boys"
                    onClick={collapseOnNavigate}
                  >
                    Boys
                  </NavLink>
                </div>
              ) : null}
            </div>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b border-slate-400'
                  : 'transition hover:opacity-70'
              }
              to="/bag"
              onClick={collapseOnNavigate}
            >
              <BsBag size={30} />
              <BagIndicator />
            </NavLink>
            <button
              onClick={() => {
                setShowKids(false);
                setShowSearch(true);
              }}
            >
              <BsSearch />
            </button>
          </>
        )}
      </div>

      <div className={showSearch ? 'block' : 'hidden transition'}>
        <SearchBar setShowSearch={setShowSearch} />
      </div>
    </>
  );
};

export default Navbar;
