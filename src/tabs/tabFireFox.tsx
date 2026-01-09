import { browserstab } from "@/data/themes"; 
import { OpenLink } from "@/assets/icons";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { BrowserTab } from "@/type/types"

const TabFirefox = () => {
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
        {browserstab.map((b) => {
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
                hover:border-text-blue
                ${isActive ? "border-blue-500 " : "border-transparent"}
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
        Edge Guide
      </h1>

      {/* Links */}
      <div className="flex flex-col gap-2">
        <a href="/" className="text-blue-500 text-sm inline-flex items-center gap-1">
          How to locally setup the Firefox extension
          <img src={OpenLink} className="w-4 h-4" />
        </a>

        <a href="/" className="block mt-2 text-blue-500 text-sm">
          How to locally setup the Firefox extension
          <img src={OpenLink} className="inline w-4 h-4 ml-1" />
        </a>
      </div>

    </div>
  );
};

export default TabFirefox;
