import { Shop, Verify } from "@/assets/icons";
import ButtonPrimary from "@/components/common/buttonPrimary";
import ButtonSecondary from "@/components/common/buttonSecondary";
import type { TabDataType } from "@/type/types";
import { useNavigate } from "react-router-dom";

export default function PreviewHeader(props: {
  appIcon: TabDataType["appIcon"];
  cropType: TabDataType["cropType"];
  title: TabDataType["title"];
}) {
  const { appIcon, cropType, title } = props;
  const navigate = useNavigate(); // ✅ hook

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-4">
      <div className="flex flex-row items-center gap-4 text-left">
        {appIcon && (
          <img
            src={appIcon}
            className={`w-15 h-15 object-cover ${
              cropType === "circle"
                ? "rounded-full"
                : cropType === "rounded"
                ? "rounded-lg"
                : ""
            }`}
          />
        )}
        <h2 className="text-[24px] font-semibold text-gradient">{title}</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 items-center">
        <ButtonSecondary
          text="View on store"
          icon={<img src={Shop} className="w-4 h-4" />}
          className="w-42.5 h-9 whitespace-nowrap cursor-pointer"
        />
        <ButtonPrimary
          text="Install"
          icon={<img src={Verify} className="w-4 h-4" />}
          className="justify-center w-42.5 h-9 cursor-pointer"
          onClick={() => navigate("/feedback")} 
        />
      </div>
    </div>
  );
}
