import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ProductCard from '../components/ProductCard';
import fetchProducts from '../actions/fetchProducts';

const ProductList = () => {
  const { category, query } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'));
  const q = searchParams.get('q');
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.products);
  const [sortBy, setSortBy] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [categories, setCategories] = useState(q ? [category, q] : [category]);
  const [filter, setFilter] = useState(q);

  const { products, loading, error, pages } = productState;

  const sortOptions = {};

  useEffect(() => {
    if (filter && !q) {
      setCategories([category, filter]);
    } else if (q) {
      setCategories([category, q]);
    } else {
      setCategories([category]);
    }
  }, [category, filter]);

  useEffect(() => {
    setSearchParams({ page: 1 });
    q ? setFilter(q) : setFilter('');
    setSortBy('');
  }, [category]);

  useEffect(() => {
    if (category) {
      dispatch(fetchProducts(categories, 'category', sortBy, page));
    } else {
      dispatch(fetchProducts(query, 'search', sortBy, page));
    }
  }, [categories, query, dispatch, sortBy, searchParams, page]);

  useEffect(() => {
    if (page < 1 || page > pages || !page) {
      setSearchParams({ page: 1 });
    }
  }, [page, pages]);

  const nextPage = () => {
    setSearchParams({ page: parseInt(page) + 1 });
  };
  const PrevPage = () => {
    setSearchParams({ page: parseInt(page) - 1 });
  };

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="w-screen px-4 md:px-12 lg:px-32 xl:px-48">
      <div className="flex flex-col md:flex-row justify-around lg:justify-start text-lg">
        <select
          className="my-12 mx-4 xl:mx-0 bg-white rounded-xl border-2 border-slate-200 p-4"
          onChange={(e) => {
            setSortBy(JSON.parse(e.target.value));
          }}
          value={JSON.stringify(sortBy)}
        >
          <option value="" hidden defaultValue>
            Sort by
          </option>
          <option value={JSON.stringify({ field: 'rating', direction: 1 })}>
            Rating
          </option>
          <option value={JSON.stringify({ field: 'price', direction: -1 })}>
            Price high to low
          </option>
          <option value={JSON.stringify({ field: 'price', direction: 1 })}>
            Price low to high
          </option>
        </select>
        <select
          className="my-12 mx-4 xl:mr-0 xl:ml-12 bg-white rounded-xl border-2 border-slate-200 p-4"
          value={filter}
          onChange={(e) => {
            updateFilter(e);
          }}
        >
          <option className="px-8" value="" defaultValue>
            Product Type
          </option>
          <option value="boots">Boots</option>
          <option value="trainers">Trainers</option>
          <option value="loafers">Loafers</option>
          <option value="sandals">Sandals</option>
        </select>
      </div>
      {loading || error ? (
        <div className="text-center text-xl pt-24">
          {loading ? (
            <span className="font-bold">Loading...</span>
          ) : (
            <span className="font-bold">
              An error occured while fetching products
            </span>
          )}
        </div>
      ) : (
        <div className="grid lg:gap-0 xl:gap-24 2xl:gap-44 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
          {products && products.length ? (
            products.map((shoe) => {
              return <ProductCard key={shoe._id} shoe={shoe} />;
            })
          ) : (
            <h1>No products found</h1>
          )}
        </div>
      )}
      <div className="mt-52 flex justify-center text-2xl">
        <button
          className={`text-slate-700 transition ml-12 ${
            page <= 1 ? 'opacity-40' : 'opacity-100 hover:opacity-80'
          }`}
          onClick={() => PrevPage()}
          disabled={page <= 1}
        >
          <BsChevronLeft size={35} />
        </button>
        <button
          className={`text-slate-700 transition mr-12 ${
            page >= pages ? 'opacity-40' : 'opacity-100 hover:opacity-80'
          }`}
          onClick={() => nextPage()}
          disabled={page >= pages}
        >
          <BsChevronRight size={35} />
        </button>
      </div>
      <p className="text-center mt-12 text-xl text-slate-700">{page}</p>
    </div>
  );
};

export default ProductList;
