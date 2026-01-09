import { ArrowLeftStep1, ArrowRightStep1 } from "@/assets/icons";
import type { TabDataType } from "@/type/types";

export default function MainWallpaper(props: {
  currentWallpaper: TabDataType["wallpapers"][number];
  next: () => void;
  prev: () => void;
}) {
  const { currentWallpaper, next, prev } = props;

  return (
    <div className="relative flex justify-center items-center">
      <button
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 left-[5%]  cursor-pointer"
      >
        <img src={ArrowLeftStep1} className="w-6 h-6" />
      </button>

      <div className="overflow-hidden rounded-xl">
        <img
          src={currentWallpaper}
          className="w-75 h-46.75 lg:w-175 lg:h-110 object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      <button
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 right-[5%]  cursor-pointer"
      >
        <img src={ArrowRightStep1} className="w-6 h-6" />
      </button>
    </div>
  );
}
