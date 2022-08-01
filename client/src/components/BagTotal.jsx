const BagTotal = ({ total }) => {
  return (
    <div className="bg-slate-300 h-44 w-screen fixed bottom-0 flex justify-center items-center text-4xl border-t-2 border-slate-400 opacity-90">
      <span className="text-xl mr-8">Total</span> £{total ? total : 0}
    </div>
  );
};

export default BagTotal;
