import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import fetchProducts from '../actions/fetchProducts';

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const params = useParams();
  const { category, query } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.products);
  const [sortBy, setSortBy] = useState(false);

  const { products, loading, error } = productState;

  const sortOptions = {};

  useEffect(() => {
    console.log(params);
    console.log(sortBy);
    if (sortBy) {
      console.log('sort true');
    }
    if (category) {
      dispatch(fetchProducts(category, 'category', sortBy));
    } else {
      dispatch(fetchProducts(query, 'search', sortBy));
    }
  }, [category, query, dispatch, sortBy]);

  // const fetchProducts = async () => {
  //   fetch(`/api/products/category/${category}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // };

  return (
    <div className="w-screen">
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setSortBy(JSON.parse(e.target.value));
        }}
      >
        <option value="" hidden selected disabled>
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
        <div className="grid justify-between gap-8 grid-cols-3">
          {products.map((shoe) => {
            return <ProductCard key={shoe._id} shoe={shoe} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
