import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import apple from "../assets/apple.png";
import "swiper/css";
import "swiper/css/navigation";
import right from "../assets/right.png";
import left from "../assets/left.png";

const ProductCategories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const products = [
    { id: 1, name: "Fresh Fruits", image: apple },
    { id: 2, name: "Fruits", image: apple },
    { id: 3, name: "Gluten-Free", image: apple },
    { id: 4, name: "Organic", image: apple },
    { id: 5, name: "Pancakes", image: apple },
    { id: 6, name: "Sauce", image: apple },
    { id: 7, name: "Sweet Snacks", image: apple },
    { id: 8, name: "Vegan", image: apple },
    { id: 9, name: "Vegan Curry", image: apple },
    { id: 10, name: "Vegetarian", image: apple },
    { id: 11, name: "Crackers", image: apple },
    { id: 12, name: "Creams", image: apple },
  ];

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      setTimeout(() => {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }, 100);
    }
  }, [swiperInstance]);

  return (
    <div className="px-4 md:px-10 lg:px-20 bg-black text-white py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="font-bold text-3xl md:text-4xl my-6 text-center">
          Product Categories
        </h1>
        <div className="flex gap-4">
          <button
            ref={prevRef}
            className="bg-black px-2 py-2 rounded border border-white"
          >
            <img src={left} alt="Previous" className="w-6 md:w-8" />
          </button>
          <button
            ref={nextRef}
            className="bg-black px-2 py-2 rounded border border-white"
          >
            <img src={right} alt="Next" className="w-6 md:w-8" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={15}
        slidesPerView={1.5} 
        onSwiper={setSwiperInstance}
        breakpoints={{
          480: { slidesPerView: 2 }, 
          640: { slidesPerView: 3 }, 
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 }, 
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-center rounded-2xl bg-gray-800 hover:bg-green-500 p-4 transition duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-full w-20 h-20 md:w-24 md:h-24"
              />
              <p className="mt-2 text-sm md:text-base text-white font-medium text-center">
                {product.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCategories;
