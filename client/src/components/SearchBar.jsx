import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ setShowSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${query.toLowerCase()}`);
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col items-center bg-slate-300 justify-center text-white p-4 mb-12 opacity-70"
    >
      <div className="flex bg-white text-xl rounded-full overflow-hidden p-4">
        <input
          className="text-black bg-white border-0 ring-0 focus:outline-0"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          onBlur={() => setShowSearch(false)}
          ref={inputRef}
        />
        <button onClick={handleSearch} className="text-black" type="submit">
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
