import { Completed, Download } from "@/assets/icons";
import ButtonPrimary from "../common/buttonPrimary";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StepFour = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    navigate("/preview");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={Completed}
        alt="Completed"
        className={`w-[150px] lg:w-[300px] transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <h1 className="font-semibold text-[18px] lg:text-[40px] text-center text-gradient mb-4">
        Building Completed
      </h1>

      <p className="mb-10 font-medium text-text-blue text-[13px] lg:text-[14px] text-center">
        Click the download button to start downloading if it’s not started automatically.
      </p>

      <ButtonPrimary
        text="Download"
        onClick={handleDownload}
        icon={<img src={Download} alt="Download" className="w-[18px] h-[18px]" />}
        className="justify-center text-[14px] font-medium w-[155px] h-[37px] cursor-pointer"
      />
    </div>
  );
};

export default StepFour;
