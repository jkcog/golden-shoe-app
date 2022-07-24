import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ setShowSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSearch = () => {
    if (query.trim()) {
      console.log(query);
      console.log(`/search/${query.toLowerCase()}`);
      navigate(`/search/${query.toLowerCase()}`);
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex bg-black justify-center text-white p-4 mb-12"
    >
      <input
        className="text-black"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        onBlur={() => setShowSearch(false)}
        ref={inputRef}
      />
      <button type="submit">Search!</button>
    </form>
  );
};

export default SearchBar;
