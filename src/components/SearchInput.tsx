import { ArrowDown } from "@/assets/icons";
import { Search } from "@/assets/icons";

const SearchInput = () => {
  return (
    <div className="w-full bg-white  h-12 border-2 border-light-blue rounded-[5px] flex items-center justify-between px-4">
      {/* Left placeholder */}
      <input
        type="text"
        placeholder="Search themes"
        className="w-[40px] flex-grow outline-none text-text-blue placeholder:text-light-gray transition-all duration-200 bg-transparent pr-2 " />

      {/* Right section: search icon + sort */}
      <div className="flex  items-center gap-4 ">
        <img src={Search} alt="Search" className="w-5 h-5  "   />
        <div className="w-0.5 self-stretch bg-light-gray"></div>
        <div className="text-light-gray flex flex-row items-center gap-2">
          sort by:
          <span className="text-text-blue text-sm gap-2">A - Z</span>
        </div>
          <img src={ArrowDown} alt="Down" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default SearchInput;