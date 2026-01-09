import type {ButtonPrimaryProps} from "@/type/types"


const ButtonPrimary = ({ text = "Button", icon = null, className = "", onClick }: ButtonPrimaryProps) => {
  return (
    <button
    onClick={onClick}
      className={`
        btn-gradient
        text-white
        px-4 py-2
        rounded-[5px]
        flex items-center gap-2
        ${className}
      `}
    >
      {icon && (
        <span className="flex items-center">
          {icon}
        </span>
      )}
      <span className="leading-none">{text}</span>
    </button>
  )
}

export default ButtonPrimary

// // flex md:items-center  cursor-pointer gap-2 font-semibold text-sm focus-visible:outline-none text-primary-400 disabled:text-primary-400/90 disabled:cursor-not-allowed

// type TProps = React.ComponentProps<"button"> & {
// 	icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
// 	iconClassName?: string;
// 	className?: string;
// 	text: string;
// };

// const ButtonPrimary = ({
// 	icon: Icon,
// 	iconClassName,
// 	text,
// 	className,
// 	...props
// }: TProps) => {
// 	return (
// 		<button
// 			className={`
//                btn-gradient
//         text-white
//         px-4 py-2
//         rounded-[5px]
//      flex items-center gap-2
				
// 				${className}
// 			`}
// 			{...props}
// 		>
// 			<span className="leading-none">{text}</span>

// 			{Icon && <Icon className={`size-5 ${iconClassName}`} />}
// 		</button>
// 	);
// };

// export default ButtonPrimary;