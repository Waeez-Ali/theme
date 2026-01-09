import { Star } from "@/assets/icons";
import SearchInput from "@/components/SearchInput";

const Hero = () => {
  return (
    <div
      className="
        w-full
        max-w-[1201px]
        min-h-[650px]
        mx-auto
        mt-40  lg:mt-14
        rounded-[20px]
        border border-white" 
       
        >
      <div className="flex flex-col justify-center items-center py-10 lg:py-16">
        {/* Badge */}
        <div className="p-[1px] rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" >
          <div
            className="
              bg-white
              w-[280px] md:w-[340px]
              h-[32px] md:h-[36px]
              flex items-center justify-center gap-2
              rounded-full
            "
          >
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

        {/* Heading */}
        <div className="flex flex-col justify-center items-center mt-6 md:mt-8 text-center px-2">
          <h1
            className="
              font-normal
              text-2xl md:text-4xl lg:text-[48px]
              leading-tight lg:leading-[48px]
              text-text-blue
            "
          >
            Check out our themes below or
          </h1>

          <span
            className="
              font-bold
              text-2xl md:text-4xl lg:text-[48px]
              text-gradient
              mb-3 md:mb-4
            "
          >
            build your own!
          </span>

          <p
            className="
              text-text-blue
              text-sm md:text-base
              max-w-xl
            "
          >
            All new tab apps are 100% ad-free and do not track any user data.
          </p>
        </div>

        {/* Search */}
        <div
          className="
            mt-16 md:mt-24 lg:mt-40
            w-full md:w-[85%] lg:w-[75%]
            px-2
          "
        >
          <SearchInput />
        </div>

      </div>
    </div>
  );
};

export default Hero;
