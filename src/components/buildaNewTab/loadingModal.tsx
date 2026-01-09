import { Building } from "@/assets/icons";
import React, { useEffect, useState } from "react";

const LoadingModal = () => {
  const [progress, setProgress] = useState(1);

  // ✅ Disable background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // disable scroll

    return () => {
      document.body.style.overflow = "auto"; // restore scroll
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className=" absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Modal Box */}
      <div className=" relative z-10 bg-white rounded-[15px] shadow-xl px-8 py-6 flex flex-col items-center gap-4 w-[344px] lg:w-[617px]">
        <img src={Building} alt="building" className="w-[150px] h-[150px]" />

        <h1 className="font-semibold text-[18px] lg:text-[40px] leading-[1.3] tracking-[0%] text-center text-gradient mb-4">
          Building...
        </h1>

        <p className="font-normal text-text-blue text-[13px] lg:text-[14px] leading-[100%] tracking-[0.02em] text-center ">
          Download will begin when ready.
        </p>

        {/* Progress Bar */}
        <div className="w-[300px] lg:w-[346px] h-[2px] bg-light-blue rounded-full overflow-hidden ">
          <div
            className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <p className="text-[12px] font-medium text-light-blue ">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingModal;
