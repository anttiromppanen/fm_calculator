import createButtons from "../../const/const";

type ButtonOperationsType = (typeof createButtons)[number];

type ButtonVariant = "base" | "accent1" | "accent2";
type ButtonSize = "sm" | "lg";

const buttonVariantStyles: Record<ButtonVariant, string> = {
  base: "bg-userButtonBg shadow-userButtonShadow text-userButtonTextColor",
  accent1:
    "bg-userButtonAccent1Bg shadow-userButtonAccent1Shadow text-2xl text-white",
  accent2: "bg-userButtonAccent2Bg shadow-userButtonAccent2Shadow",
};

const buttonSizeStyles: Record<ButtonSize, string> = {
  sm: "col-span-1",
  lg: "col-span-2 text-2xl",
};

function CalculatorButton({
  value,
  handleClick,
}: {
  value: ButtonOperationsType;
  handleClick: () => void;
}) {
  let variant: ButtonVariant = "base";
  const size: ButtonSize = value === "RESET" || value === "=" ? "lg" : "sm";

  switch (value) {
    case "DEL":
      variant = "accent1";
      break;
    case "RESET":
      variant = "accent1";
      break;
    case "=":
      variant = "accent2";
      break;
    default:
      variant = "base";
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
      max-xs:text-2xl col-span-1 row-span-1 flex items-center justify-center rounded-md
      text-3xl font-bold shadow-[inset_0px_-4px_0px_0px] transition-colors
      active:brightness-90
      ${buttonVariantStyles[variant]}
      ${buttonSizeStyles[size]}
      `}
    >
      {value === "DEL" ? (
        <>
          <p className="max-xs:block -mb-1 hidden">C</p>
          <p className="max-xs:hidden -mb-1">{value}</p>
        </>
      ) : (
        <p className="-mb-1">{value}</p>
      )}
    </button>
  );
}

export default CalculatorButton;
