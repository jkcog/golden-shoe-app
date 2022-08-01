import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductToast = (product, size) => {
  return toast(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } w-full rounded-lg flex px-4 py-2`}
        onClick={() => toast.dismiss(t.id)}
      >
        <img
          className="w-24 h-24 object-contain"
          src={product.images[0]}
          alt={product.title}
        />
        <div className="flex flex-col justify-around">
          <h1>{product.title}</h1>
          <p>UK {size}</p>
          <Link className="font-bold mt-auto mb-2" to="/bag">
            Go to bag
          </Link>
        </div>
      </div>
    ),
    { id: `${product.id}-${size}`, position: 'top-center', duration: 3000 }
  );
};

export default ProductToast;
