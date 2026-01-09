import { ArrowLeftStep1, ArrowRightStep1 } from "@/assets/icons";
import React from "react";
import type { SteperProps } from "@/type/types"



const Steper: React.FC<SteperProps> = ({ handleBack, handleNext, currentStep, isStepEnabled }) => {
  const steps = [1, 2, 3];

  return (
    <div className="w-[256px] mx-auto">
      <div className="flex items-center justify-center relative mb-10">
        {/* Left Arrow */}
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="absolute left-[-40px] text-xl text-blue-400 hover:text-blue-600
            disabled:text-blue-200 disabled:cursor-not-allowed transition cursor-pointer"
        >
          <img src={ArrowLeftStep1} alt="Previous" />
        </button>

        {/* Steps */}
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              {/* Step Circle */}
              <div
                className={`w-[18px] h-[18px] p-3 rounded-full flex items-center justify-center text-sm font-normal transition-all duration-300
                  ${
                    currentStep === step
                      ? "bg-white text-blue-400 border-2 border-blue-200 shadow-lg"
                      : isStepEnabled(step)
                        ? "bg-white text-blue-600 border-2 border-blue-500"
                        : "bg-white text-blue-400 border-2 border-blue-200"
                  }`}
              >
                {step}
              </div>

              {/* Step Line */}
              {index < steps.length - 1 && (
                <div
                  className={`w-[35px] h-0.5 mx-4 transition-all duration-300
                    ${isStepEnabled(step) ? "bg-blue-900" : "bg-blue-200"}`}
                />
              )}
            </div>
          ))}
        </div>

        <button
        onClick={handleNext}
        disabled={currentStep === steps.length || !isStepEnabled(currentStep)}
        className="absolute right-[-40px] text-4xl text-blue-400 hover:text-blue-600
          disabled:text-blue-200 disabled:cursor-not-allowed transition cursor-pointer"
      >
        <img src={ArrowRightStep1} alt="Next" />
      </button>
      </div>
    </div>
  );
};

export default Steper;
