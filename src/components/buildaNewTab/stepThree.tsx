import React, { useRef } from "react";
import ButtonPrimary from "../common/buttonPrimary";
import { InfoCircle, UpArrow, Verify } from "@/assets/icons";
import LoadingModal from "./loadingModal";
import type { SteperThreeProps, CropType } from "@/type/types"


const SteperThree: React.FC<SteperThreeProps> = ({
  appIcon,
  setAppIcon,
  cropType,
  setCropType,
  title,
  setTitle,
  description,
  setDescription,
  handleSubmit,
  loading,
  setLoading
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);


  /* =====================
     File Upload
  ====================== */
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setAppIcon(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveIcon = () => {
    setAppIcon(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="w-[344px] lg:w-[644px] lg:h-[665px] mb-10">
      <h1 className="font-semibold text-[18px] lg:text-[40px] text-center text-gradient mb-4">
        Theme Detail
      </h1>

      {/* App Icon */}
      <div className="mb-8">
        <label className="flex gap-2 text-text-blue text-[16px]">
          App Icon <img src={InfoCircle} alt="info" />
        </label>

        <div className="mb-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`w-[170px] h-[170px] border border-[#9CD0FF] bg-white flex items-center justify-center overflow-hidden transition cursor-pointer mt-4
              ${cropType === "circle" ? "rounded-full" : "rounded-lg"}
            `}
          >
            {appIcon ? (
              <img
                src={appIcon}
                alt="Preview"
                className={`w-full h-full object-cover ${
                  cropType === "circle" ? "rounded-full" : "rounded-lg"
                }`}
              />
            ) : (
              <span className="flex flex-col items-center">
                <img src={UpArrow} alt="upload" className="w-10 h-10" />
                <span className="text-xs text-gray-500">Upload App Icon</span>
              </span>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </button>
        </div>

        {appIcon && (
          <div className="ml-10">
            <button
              onClick={handleRemoveIcon}
              className="cursor-pointer text-light-gray font-medium text-[12px] leading-[100%] tracking-[0.02em] align-middle underline decoration-solid"
            >
              Remove icon
            </button>
          </div>
        )}
      </div>

      {/* Crop */}
      <div className="mb-8">
        <label className="text-sm font-medium text-text-blue mb-3 block">Crop Icon</label>
        <div className="flex gap-6">
          {(["original", "rounded", "circle"] as CropType[]).map((crop) => (
            <label key={crop} className="flex items-center gap-2">
              <input
                type="radio"
                name="crop"
                checked={cropType === crop}
                onChange={() => setCropType(crop)}
              />
              <span className="capitalize text-sm">{crop}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="mb-8">
        <label className="text-text-blue">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Beach Ocean"
          className="w-full border-b border-text-blue py-2 focus:outline-none"
        />
      </div>

      {/* Description */}
      <div className="mb-8">
        <label className="text-text-blue">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
          className="w-full border-b border-text-blue py-2 focus:outline-none"
        />
      </div>

      {/* Submit */}
      <ButtonPrimary
        onClick={handleSubmit}
         text={loading ? "Saving..." : "Submit"}
        icon={<img src={Verify} alt="verify" className="w-4 h-4" />}
        className=""
      />



      {/* Loading Modal */}
    {loading && <LoadingModal />}
    </div>
  );
};

export default SteperThree;
