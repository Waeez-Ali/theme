import React, { useState } from "react";
import ButtonPrimary from "../common/buttonPrimary";
import { Add, ArrowCircleRight } from "@/assets/icons";
import type { SteperTwoProps } from "@/type/types"



const SteperTwo: React.FC<SteperTwoProps> = ({
  wallpaper,
  setWallpaper,
  handleNext
}) => {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const filterDuplicateFiles = (existing: File[], incoming: File[]) => {
    return incoming.filter(
      (file) =>
        !existing.some(
          (ex) =>
            ex.name === file.name &&
            ex.size === file.size &&
            ex.lastModified === file.lastModified
        )
    );
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setWallpaper([...wallpaper, ...filterDuplicateFiles(wallpaper, droppedFiles)]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const openPreview = (index: number) => {
    setPreviewIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setPreviewIndex(null);
    document.body.style.overflow = "";
  };

  const goPrev = () => {
    if (previewIndex !== null && previewIndex > 0) setPreviewIndex(previewIndex - 1);
  };

  const goNext = () => {
    if (previewIndex !== null && previewIndex < wallpaper.length - 1) setPreviewIndex(previewIndex + 1);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-14">
        <h1 className="font-semibold text-[18px] lg:text-[40px] text-center text-gradient mb-4">
          Upload Wallpaper
        </h1>
        <p className="mb-10 text-[12px] lg:text-[14px] text-gray-600 text-center">
          Background wallpaper photos upload up to 250 photos in PNG, JPG, or JPEG
        </p>

        {wallpaper.length > 0 && (
          <div className="w-[310px] h-[434px] lg:w-[835px] lg:h-[583px] p-3 overflow-y-auto mb-6">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {wallpaper.map((img, index) => (
                <div
                  key={`${img.name}-${img.lastModified}`}
                  className="relative aspect-square border rounded-sm overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(img)}
                    alt="wallpaper"
                    className="w-full h-full object-cover"
                    // onClick={() => openPreview(index)}
                  />
                  <button
                    onClick={() =>
                      setWallpaper(wallpaper.filter((_, i) => i !== index))
                    }
                    className="absolute top-1 right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold shadow hover:bg-red-500 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-[340px] lg:w-[829px] h-[101px] border border-dashed border-blue-400 rounded-sm bg-white flex justify-center items-center cursor-pointer hover:bg-blue-50 transition"
        >
          <input
            type="file"
            id="upload"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              if (!e.target.files) return;
              const files = Array.from(e.target.files);
              setWallpaper([...wallpaper, ...filterDuplicateFiles(wallpaper, files)]);
            }}
          />
          <label htmlFor="upload" className="cursor-pointer">
            <div className="flex flex-col items-center">
              <img src={Add} alt="add" />
              <p className="text-[10px] text-light-blue text-center">
                Drag and drop or browse to <span className="text-text-blue underline font-bold">choose files</span>
              </p>
            </div>
          </label>
        </div>
      </div>

      <div className="mt-4 mb-14 flex justify-center lg:justify-start">
        <ButtonPrimary
          onClick={handleNext}
          text="Next"
          icon={<img src={ArrowCircleRight} alt="Arrow" className="w-[16px] h-[16px]" />}
          className="justify-center text-[14px] font-medium w-[155px] h-[37px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SteperTwo;
