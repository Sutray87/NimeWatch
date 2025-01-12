<div className="relative flex h-[500px] w-8/12 border-2 border-green-500 mx-auto mt-24 overflow-hidden">
        <div className="relative flex-shrink-0 h-full w-2/3 border-2 border-red-500 overflow-hidden">
          <div
            className="h-full w-full flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {carouselItems.map((cItem, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full flex justify-center items-center"
              >
                <img
                  src={cItem}
                  alt={`Slide ${index + 1}`}
                  className="object-contain h-full w-full"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 h-full w-full flex justify-between items-center text-white text-3xl">
            <button
              className="pl-4 hover:bg-gray-700 hover:bg-opacity-70 p-2"
              onClick={handlePrev}
            >
              <FaArrowAltCircleLeft />
            </button>
            <button
              className="pr-4 hover:bg-gray-700 hover:bg-opacity-70 p-2"
              onClick={handleNext}
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="border-2 border-blue-500 w-1/3 flex items-center justify-center bg-gray-100 text-center p-4">
          <p className="text-lg font-medium">
            {`Slide ${currentIndex + 1}: ${
              carouselItems[currentIndex]
                .split("/")
                .pop()
                .replace(".jpg", "")
                .replace(/([A-Z])/g, " $1")
                .trim()
            }`}
          </p>
        </div>
      </div>