import type { TabDataType } from "@/type/types";

export default function SubWallpapers(props: {
  visibleSubs: TabDataType["wallpapers"];
  currentIndex: number;
  subStartIndex: number;
  handleSubClick: (index: number) => void;
}) {
  const { visibleSubs, currentIndex, subStartIndex, handleSubClick } = props;

  return (
    <div className="flex justify-center gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-4 scrollbar-hide">
      <div className="flex gap-3 mx-auto">
        {visibleSubs.map((wp, i) => {
          const realIndex = subStartIndex + i;

          return (
            <img
              key={realIndex}
              src={wp}
              onClick={() => handleSubClick(realIndex)}
              className={`
                shrink-0
                w-37.5
                h-25
                object-cover
                rounded-md
                cursor-pointer
                snap-center
                transition-all
                duration-300
                ${
                  currentIndex === realIndex
                    ? "ring-2 ring-light-blue scale-105"
                    : "opacity-80 hover:opacity-100"
                }
              `}
            />
          );
        })}
      </div>
    </div>
  );
}
