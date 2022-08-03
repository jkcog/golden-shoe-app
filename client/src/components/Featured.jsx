import { Link } from 'react-router-dom';

const Featured = ({ category }) => {
  return (
    <>
      <div className="flex justify-center items-center max-w-full w-full md:w-auto mx-auto md:mx-12 lg:mx-24 xl:mx-40 lg:h-[34rem] w-auto flex-col lg:flex-row p-4 md:p-8 lg:p-12 mt-24 relative bg-slate-500">
        <img
          className="w-72 md:w-96 2xl:w-1/2 max-h-full object-cover object-bottom"
          src="/images/shoes/women/Trainer-2/1.jpeg"
        />
        <img
          className="w-72 md:w-96 2xl:w-1/2 max-h-full object-cover object-bottom"
          src="/images/shoes/men/Trainer-2/2.jpeg"
        />
        <div className="bg-slate-300 absolute p-2 lg:p-4 bottom-50 lg:mb-24 rounded-lg opacity-80">
          <p className="font-thin text-2xl xl:text-5xl text-black capitalize text-center">
            {category} for everyone
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 xl:gap-24 mt-12 xl:mt-4 mb-12 text-white text-center text-sm md:text-lg xl:text-xl">
        <Link to={`/category/women?q=${category}`}>
          <div className="bg-slate-400 p-2 py-4 rounded-lg w-48 w-52 hover:opacity-80 text-xl">
            Women's {category}
          </div>
        </Link>
        <Link to={`/category/men?q=${category}`}>
          <div className="bg-slate-400 p-2 py-4 rounded-lg w-52 hover:opacity-80 text-xl">
            Men's {category}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Featured;
