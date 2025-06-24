import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="min-w-screen"
    >
      <SwiperSlide>
        <div className="max-w-screen h-full bg-gradient-to-br from-indigo-600 via-red-500 to-gray-400 text-gray-900 grid grid-cols-1 lg:grid-cols-2 gap-4 p-20 lg:p-16">
          <div>
            <img
              src="https://i.ibb.co/Jj6wtZpp/pexels-akilmazumder-1072824.jpg"
              alt=""
              className="w-full lg:h-96 object-cover rounded-2xl mx-auto"
            />
          </div>
          <div className="flex flex-col gap-10 h-full justify-center">
            <h1 className="text-2xl font-bold lg:text-4xl">
              Spring into Gardening
            </h1>
            <p className="text-lg">
              Spring is the perfect time to repot, fertilize, and prune your
              plants. Give them a fresh start for vibrant growth all year long.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-w-screen h-auto bg-amber-100 text-gray-900 grid grid-cols-1 lg:grid-cols-2 gap-4 p-14 ">
          <div>
            <img
              src="https://i.ibb.co/chjSzkgG/beautiful-biophilic-scene.jpg"
              alt=""
              className="w-full lg:h-96 object-cover rounded-2xl mx-auto"
            />
          </div>
          <div className="flex flex-col gap-10 h-full justify-center">
            <h1 className="text-2xl font-bold lg:text-4xl">
              Water Wisely, Grow Happily
            </h1>
            <p className="text-lg">
              Overwatering is one of the most common plant care mistakes. Let
              the soil dry out slightly between waterings and always check
              drainage.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-screen h-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-gray-900 grid grid-cols-1 lg:grid-cols-2 gap-4 p-16">
          <div>
            <img
              src="https://i.ibb.co/20p4MKxb/small-vecteezy-lush-green-plants-growing-in-shallow-water-under-a-bright-sky-59992241-small.jpg"
              alt=""
              className="w-full lg:h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-10 h-full justify-center">
            <h1 className="text-2xl font-bold lg:text-4xl">
              Top 3 Beginner-Friendly Houseplants
            </h1>
            <div className="text-lg">
              <p>🌵 Snake Plant – Hardy and air-purifying</p>
              <p>🍃 Pothos – Fast-growingand forgiving</p>
              
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
