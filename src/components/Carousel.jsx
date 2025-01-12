import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";



export default function Carousel({carouselItems}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    // Logika melingkar ke belakang
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    // Logika melingkar ke depan
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="h-100 w-full mx-auto mt-10 flex justify-between py-5">
        {/* Container Carousel */}
        <div className="h-full w-9/20 relative">
          {/* Gambar Carousel */}
          <div className="h-full w-72 flex overflow-hidden mx-auto">
            {carouselItems.map((cItem, index) => (
              <div
                key={cItem.id}
                className={`flex-shrink-0 w-full h-full transition ease-in-out duration-100 ${
                  index === currentIndex ? "translate-x-0" : "hidden"
                }`}
              >
                <img
                  src={cItem.pathImg}
                  alt={cItem.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Tombol Navigasi */}
          <div className="h-full w-full absolute top-0 left-0 flex justify-between text-white text-3xl">
            <button
              className="h-full pl-4 hover:bg-black-900 hover:bg-opacity-30"
              onClick={prevSlide}
            >
              <FaArrowAltCircleLeft />
            </button>
            <button
              className="h-full pr-4 hover:bg-black-900 hover:bg-opacity-30"
              onClick={nextSlide}
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>

        {/* Sinopsis */}
        <div className="h-full w-1/2">
          <h2 className="text-2xl font-bold text-white">{carouselItems[currentIndex].title}</h2>
          <p className="text-white">{carouselItems[currentIndex].sinopsis}</p>
        </div>
      </div>
    </>
  );
}
