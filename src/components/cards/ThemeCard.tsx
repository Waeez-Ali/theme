import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../common/buttonPrimary"
import ButtonSecondary from "../common/buttonSecondary"
import { Eye, Mouse, Shop } from "@/assets/icons"
import type { ThemeCardProps } from "@/type/types"

const ThemeCard: React.FC<ThemeCardProps> = ({ image, title, className = "" }) => {
    const navigate = useNavigate(); 

    return (
        <div className={` w-full rounded-2xl overflow-hidden shadow-lg ${className}`}>
            {/* Image */}
            <div className="p-1 flex justify-center items-center h-[235.75] lg:h-[182px]">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl w-full h-full object-cover border-2 border-white"
                />
            </div>

            {/* Content */}
            <div className="bg-white p-2 flex flex-col gap-3">
                <h2 className="text-center text-text-blue text-[14px]">
                    {title}
                </h2>
                <div className="flex justify-center items-center gap-0.5">
                    <ButtonSecondary
                        text="Preview"
                        icon={<img src={Eye} alt="Eye" className="w-[16px] h-[16px]" />}
                        className="border-none text-[10px]"
                    />

                    {/* Vertical separator */}
                    <div className="w-px h-3 bg-light-gray"></div>

                    <ButtonSecondary
                        text="Store"
                        icon={<img src={Shop} alt="Store" className="w-[16px] h-[16px]" />}
                        className="border-none text-[10px]"
                    />

                    <ButtonPrimary
                        text="Install"
                        icon={<img src={Mouse} alt="Mouse" className="w-[16px] h-[16px]" />}
                        className="text-[10px] cursor-pointer"
                        onClick={() => navigate("/feedback")} 
                    /> 
                </div>
            </div>
        </div>
    )
}

export default ThemeCard
