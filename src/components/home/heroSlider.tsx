import SearchInput from "../SearchInput";
import { Mouse, Star } from "@/assets/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { SLIDES } from "@/data/themes";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto lg:mt-4 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        loop
        navigation
        pagination={{ clickable: true }}
        className="rounded-[20px] hero-swiper"
      >
        {SLIDES.map((slide) => {
          const isFirstSlide = slide.id === 1;

          // Gradient Star Button for id:1
          const StarButton = (
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mb-4">
              <div className="bg-white w-[280px] md:w-[340px] h-[32px] md:h-[36px] flex items-center justify-center gap-2 rounded-full">
                <img
                  src={Star}
                  alt="Star"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <span className="text-xs md:text-sm text-text-blue font-medium">
                  New Collection 2024!
                </span>
              </div>
            </div>
          );

          // Default Install Now button for rest of the slides
          const InstallButton = (
            <div
              className={`p-[1px] rounded-full border ${slide.buttonBorder || "border-[#00FFF2]"
                } mt-4`}
            >
              <button className="bg-transparent w-[180px] md:w-[340px] h-[30px] md:h-[36px] flex items-center justify-center gap-2 rounded-full">
                <img
                  src={Mouse}
                  alt="Install"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <span
                  className={`text-xs md:text-sm font-medium ${slide.buttonText || "text-white"
                    }`}
                >
                  Install Now!
                </span>
              </button>
            </div>
          );

          return (
            <SwiperSlide key={slide.id}>
              <div
                className=" border border-white relative w-full h-[295px] lg:h-[700px] aspect-[16/9] lg:aspect-[1240/650]  bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >

                {/* Bottom-to-top shadow overlay */}
                <div className="absolute bottom-0 w-full h-[30%] lg:h-[30%] bg-gradient-to-t from-white/100 to-transparent pointer-events-none"></div>

                <div className="flex flex-col items-center text-center py-10 lg:absolute lg:inset-0 lg:justify-center lg:pb-16 lg:py-0">

                  {/* Button ABOVE h1 only for id:1 */}
                  {isFirstSlide && StarButton}

                  {/* Title */}
                  <h1
                    className={`font-normal text-[18px] lg:text-[48px] ${slide.titleColor || "text-white"
                      }`}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <span
                    className={`font-bold text-[18px] lg:text-[48px] ${slide.subtitleColor || "text-white"
                      }`}
                  >
                    {slide.subtitle}
                  </span>

                  {/* Optional paragraph */}
                  {slide.description && (
                    <p
                      className={`mt-3 text-sm md:text-base max-w-[600px] ${slide.descriptionColor || "text-white"
                        }`}
                    >
                      {slide.description}
                    </p>
                  )}

                  {/* Default button below content for rest of slides */}
                  {!isFirstSlide && InstallButton}

                  {/* Search Input */}
                  <div className="w-full absolute p-4 bottom-2 lg:static  lg:mt-30 lg:w-[75%]">
                    <SearchInput />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Swiper Custom Styles */}
      <style>
        {`
          .hero-swiper .swiper-button-prev,
          .hero-swiper .swiper-button-next {
            color: white;
            width: 40px;
            height: 40px;
            margin: 0 20px;
            margin-top: -60px;
          }

          .hero-swiper .swiper-pagination-bullet {
            background: white;
            opacity: 1;
            width: 6px;
            height: 6px;
            position: relative;
            bottom: 240px;
          }

          .hero-swiper .swiper-pagination-bullet-active {
            background: #003360;
            width: 7px;
            height: 7px;
          }

          @media (max-width: 1024px) {
            .hero-swiper .swiper-button-prev,
            .hero-swiper .swiper-button-next {
              width: 20px;
              height: 20px;
              margin-top: -40px;
            }

            .hero-swiper .swiper-pagination {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSlider;
