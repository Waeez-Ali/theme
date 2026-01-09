import { browserstab } from "@/data/themes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { BrowserTab } from "@/type/types"

const Tab = () => {
  const [activeBrowser, setActiveBrowser] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = (b: BrowserTab) => {
    setActiveBrowser(b.name);
    navigate(b.route); // Navigate using the route from data
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-225">

      {/* Buttons */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        {browserstab.map((b: BrowserTab) => {
          const isActive = activeBrowser === b.name;

          return (
            <button
              key={b.name}
              onClick={() => handleClick(b)}
              className={`
                flex items-center justify-center gap-2.5
                w-45 
                px-6.25 py-2
                rounded-[5px]
                text-[14px] lg:text-[18px]
                whitespace-nowrap
                cursor-pointer
                border
                ${isActive ? "border-blue-500" : "border-transparent"}
              `}
            >
              <img src={b.icon} alt={b.name} className="w-6 h-6" />
              <span>{b.name}</span>
            </button>
          );
        })}
      </div>

      {/* Heading */}
      <h1 className="
        font-semibold
        text-[18px] lg:text-[40px]
        leading-[100%]
        text-center
        text-text-blue
      ">
        Guide
      </h1>
    </div>
  );
};

export default Tab;
