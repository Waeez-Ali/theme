import { Mouse, Star, Verify } from "@/assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ButtonPrimary from "@/components/common/buttonPrimary";
import { SLIDES } from "@/data/themes";
import type { SlideType } from "@/type/types";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Feedback = () => {
  const navigate = useNavigate(); // ✅ hook

  return (
    <div className="w-full max-w-[1240px] mx-auto p-4 lg:mt-4 relative">

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        loop
        navigation
        pagination={{ clickable: true }}
        className="rounded-[20px] hero-swiper"
      >
        {SLIDES.map((slide: SlideType) => {
          const isFirstSlide = slide.id === 1;

          // Gradient Star Button for id:1
          const StarButton = (
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mb-4">
              <div className="bg-white w-[280px] md:w-[340px] h-[32px] md:h-[36px] flex items-center justify-center gap-2 rounded-full">
                <img src={Star} alt="Star" className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm text-text-blue font-medium">
                  New Collection 2024!
                </span>
              </div>
            </div>
          );

          // Default Install Now button for rest of the slides
          const InstallButton = (
            <div
              className={`p-[1px] rounded-full border ${slide.buttonBorder || "border-[#00FFF2]"} mt-4`}
            >
              <button className="bg-transparent w-[180px] md:w-[340px] h-[30px] md:h-[36px] flex items-center justify-center gap-2 rounded-full">
                <img src={Mouse} alt="Install" className="w-4 h-4 md:w-5 md:h-5" />
                <span className={`text-xs md:text-sm font-medium ${slide.buttonText || "text-white"}`}>
                  Install Now!
                </span>
              </button>
            </div>
          );

          return (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-[295px] lg:h-[700px] aspect-[16/9] lg:aspect-[1240/650] bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Bottom-to-top shadow overlay */}
                <div className="absolute bottom-0 w-full h-[20%] lg:h-[30%] bg-gradient-to-t from-white/100 to-transparent pointer-events-none"></div>

                <div className="flex flex-col items-center text-center py-10 lg:absolute lg:inset-0 lg:justify-center lg:pb-16 lg:py-0">

                  {/* Button ABOVE h1 only for id:1 */}
                  {isFirstSlide && StarButton}

                  {/* Title */}
                  <h1 className={`font-normal text-[18px] lg:text-[48px] ${slide.titleColor || "text-white"}`}>
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <span className={`font-bold text-[18px] lg:text-[48px] ${slide.subtitleColor || "text-white"}`}>
                    {slide.subtitle}
                  </span>

                  {/* Optional paragraph */}
                  {slide.description && (
                    <p className={`mt-3 text-sm md:text-base max-w-[600px] ${slide.descriptionColor || "text-white"}`}>
                      {slide.description}
                    </p>
                  )}

                  {/* Default button below content for rest of slides */}
                  {!isFirstSlide && InstallButton}

                  {/* Overlayed H1 at bottom of slider */}
                  <h1 className="absolute bottom-4 lg:bottom-10 text-gradient font-bold text-xl lg:text-4xl">
                    {slide.bottomTitle || "We are sad to see you leave!"}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Feedback Section with Input Box */}
      <div className="w-full mt-10 p-6 rounded-lg">
        <div className="max-w-[800px] mx-auto">
          {/* Top-left label */}
          <label
            htmlFor="feedback"
            className="block font-poppins font-medium text-text-blue text-[18px] leading-[100%] tracking-[0] align-middle mb-2"
          >
            How can we do better?
          </label>

          {/* Input Box */}
          <input
            type="text"
            id="feedback"
            placeholder="Type your feedback here..."
            className="w-full h-[129px] p-3 text-left align-top border border-light-blue rounded-lg font-poppins font-medium text-[14px] leading-[100%] tracking-[0] focus:outline-none text-gray-700 placeholder-light-gray"
          />

          <ButtonPrimary
            text="Submit" 
            icon={<img src={Verify} alt="verify" className="w-4 h-4" />}
            className="mt-2 cursor-pointer"
            onClick={() => navigate("/")} // ✅ navigate to /feedback
          />
        </div>
      </div>

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

export default Feedback;
