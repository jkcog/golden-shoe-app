import Featured from '../components/Featured';
const Home = () => {
  return (
    <div>
      <div className="border-8 border-slate-400 mx-auto w-fit mt-24 p-8">
        <h1 className="text-center text-2xl md:text-6xl font-bold text-amber-500 mx-4">
          Golden Shoes
        </h1>
      </div>
      <Featured category="trainers" />
    </div>
  );
};

export default Home;
