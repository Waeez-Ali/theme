import { useEffect, useState } from "react";
import PreviewHeader from "@/components/preview/PreviewHeader";
import MainWallpaper from "@/components/preview/MainWallpaper";
import SubWallpapers from "@/components/preview/SubWallpapers";
import { Close } from "@/assets/icons";
import ButtonSecondary from "@/components/common/buttonSecondary";
import type { TabDataType } from "@/type/types";

export default function PreviewPage() {
  const [tabData, setTabData] = useState<TabDataType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subStartIndex, setSubStartIndex] = useState(0);

  // Load data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("newTabData");
    if (!data) return;

    const parsed = JSON.parse(data);
    const arrayData = Array.isArray(parsed) ? parsed : [parsed];

    setTabData(arrayData);

    // Set currentIndex to last wallpaper of last theme
    const lastItem = arrayData[arrayData.length - 1];
    setCurrentIndex(lastItem.wallpapers.length - 1);
  }, []);

  if (tabData.length === 0) {
    return <p className="text-center mt-10">No data found.</p>;
  }

  // ✅ Show last added theme
  const item = tabData[tabData.length - 1];
  const total = item.wallpapers.length;

  const next = () =>
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  const handleSubClick = (index: number) => {
    setCurrentIndex(index);
    if (index < subStartIndex) setSubStartIndex(index);
    if (index >= subStartIndex + 4) setSubStartIndex(index - 3);
  };

  const visibleSubs = item.wallpapers.slice(
    subStartIndex,
    subStartIndex + 4
  );

  const handleClearData = () => {
    localStorage.removeItem("newTabData");
    setTabData([]);
  };

  return (
    <div className="w-full min-h-screen flex justify-center my-6">
      <div className="w-full max-w-6xl p-2 flex flex-col gap-8">
        <PreviewHeader
          appIcon={item.appIcon}
          cropType={item.cropType}
          title={item.title}
        />

        <MainWallpaper
          currentWallpaper={item.wallpapers[currentIndex]}
          next={next}
          prev={prev}
        />

        <SubWallpapers
          visibleSubs={visibleSubs}
          currentIndex={currentIndex}
          subStartIndex={subStartIndex}
          handleSubClick={handleSubClick}
        />

        <div>
          <p className="font-semibold text-[14px] text-text-blue leading-none tracking-normal align-middle mb-6">
            Description
          </p>
          <p className="font-normal text-[13px] leading-none tracking-[0.02em] align-middle text-text-blue">
            {item.description}
          </p>
        </div>

        <div className="flex justify-end">
          <ButtonSecondary
            onClick={handleClearData}
            text="Clear"
            icon={<img src={Close} className="w-4 h-4" />}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
