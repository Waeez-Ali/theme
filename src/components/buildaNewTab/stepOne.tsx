import React from 'react'
import type { SteperOneProps } from "@/type/types"



const SteperOne: React.FC<SteperOneProps> = ({
  browsers,
  selectedBrowser,
  setSelectedBrowser
}) => {
  return (
    <div className="text-center">
      <h1 className="font-semibold text-[18px] lg:text-[40px] leading-[100%] tracking-normal text-center text-gradient">
        Create a New Tab Theme
      </h1>
      <p className="text-[12px] lg:text-[14px] text-gray-600 mb-12">
        Select a browser
      </p>

      <div className="flex justify-center gap-8 mb-22">
        {browsers.map((b) => (
          <button
            key={b.name}
            onClick={() => setSelectedBrowser(b.name)}
            className={`flex items-center gap-4 p-1 rounded-sm cursor-pointer
              ${selectedBrowser === b.name ? 'border border-blue-500' : 'border-gray-900'}`}
          >
            <img src={b.icon} alt={b.name} />
            <span className="text-[14px] lg:text-[18px]">{b.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SteperOne
