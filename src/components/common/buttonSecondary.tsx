const ButtonSecondary = ({
  text = "Button",
  icon = null,
  className = "",
  onClick, // ✅ add this
}: {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void; // ✅ type it
}) => {
  return (
    <button
      onClick={onClick} // ✅ use it
      className={`
        bg-transparent
        border border-slate-700
        text-text-blue
        px-4 py-2
        rounded-[5px]
        flex items-center gap-2
        ${className}
      `}
    >
      {icon && <span className="flex items-center text-[1em]">{icon}</span>}
      <span className="leading-none">{text}</span>
    </button>
  );
};

export default ButtonSecondary;
