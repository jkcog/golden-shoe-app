import { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index < images.length - 1) {
      setIndex((prevState) => prevState + 1);
    } else {
      setIndex(0);
    }
  };

  const prevImage = () => {
    if (index > 0) {
      setIndex((prevState) => prevState - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center">
      <div className="flex flex-row lg:flex-col lg:mr-4">
        {images.map((img, i) => {
          return (
            <img
              key={i}
              className="w-12 h-12"
              src={img}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>
      <div>
        <img
          className="max-w-full mx-auto w-64 sm:w-72 md:w-80 lg:w-96 transition"
          src={images[index]}
        />
        <div className="flex justify-between items-end mx-auto w-64 sm:w-72 md:w-80 lg:w-96">
          <div className="cursor-pointer" onClick={prevImage}>
            <AiOutlineArrowLeft size={30} />
          </div>
          <div className="cursor-pointer" onClick={nextImage}>
            <AiOutlineArrowRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
