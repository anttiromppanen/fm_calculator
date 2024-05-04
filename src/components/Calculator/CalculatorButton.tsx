import { evaluate } from "mathjs";
import { Dispatch, SetStateAction } from "react";
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
  resultScreenValue,
  setResultScreenValue,
  totalResult,
  setTotalResult,
  resetScreenValue,
  setResetScreenValue,
  disableOperand,
  setDisableOperand,
}: {
  value: ButtonOperationsType;
  resultScreenValue: string;
  setResultScreenValue: Dispatch<SetStateAction<string>>;
  totalResult: string;
  setTotalResult: Dispatch<SetStateAction<string>>;
  resetScreenValue: boolean;
  setResetScreenValue: Dispatch<SetStateAction<boolean>>;
  disableOperand: boolean;
  setDisableOperand: Dispatch<SetStateAction<boolean>>;
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

  const handleSelectOperand = (state: string, operand: string) => {
    switch (operand) {
      case "+":
        return `${state} + `;
      case "-":
        return `${state} - `;
      case "x":
        return `${state} * `;
      case "/":
        return `${state} / `;
      default:
        return "";
    }
  };

  const handleResetCalculator = () => {
    setTotalResult("");
    setResultScreenValue("");
  };

  const handleShowCalculationResult = () => {
    if (!totalResult) return;
    const mathResult = String(evaluate(totalResult));
    setResultScreenValue(mathResult);
    setTotalResult(mathResult);
    setDisableOperand(false);
    setResetScreenValue(true);
  };

  const handleAddNumberToCalculation = () => {
    if (resetScreenValue) setResultScreenValue("");
    setResetScreenValue(false);
    setDisableOperand(false);
    setResultScreenValue((state) => state + value);
    setTotalResult((state) => `${state}${value}`);
  };

  const handleAddComma = () => {
    // return if latest button pressed is not a number
    if (
      Number.isNaN(
        parseInt(totalResult.trimEnd()[totalResult.length - 1], 10),
      ) ||
      resultScreenValue.includes(".")
    )
      return;
    setResultScreenValue((state) => `${state}.`);
    setTotalResult((state) => `${state}.`);
  };

  // Handles basic arithmetic operations by appending the corresponding symbol
  const handleOperand = (operand: string) => {
    if (disableOperand) return; // Prevent multiple operators in a row
    setTotalResult((state) => handleSelectOperand(state, operand));
    setResetScreenValue(true);
    setDisableOperand(true);
  };

  const handleDel = () => {
    if (resultScreenValue.length <= 0 || totalResult.length <= 0) return;
    setResultScreenValue((state) => state.slice(0, -1));
    setTotalResult((state) => state.slice(0, -1));
  };

  const selectCalculatorOperation = (operation: ButtonOperationsType) => {
    switch (operation) {
      case "DEL":
        handleDel();
        break;
      case "RESET":
        handleResetCalculator();
        break;
      case "=":
        handleShowCalculationResult();
        break;
      case "+":
      case "-":
      case "x":
      case "/":
        handleOperand(operation);
        break;
      case ".":
        handleAddComma();
        break;
      default:
        handleAddNumberToCalculation();
    }
  };

  return (
    <button
      type="button"
      onClick={() => selectCalculatorOperation(value)}
      className={`
      col-span-1 row-span-1 flex items-center justify-center rounded-md text-3xl
      font-bold shadow-[inset_0px_-4px_0px_0px] transition-colors active:brightness-90
      ${buttonVariantStyles[variant]}
      ${buttonSizeStyles[size]}
      `}
    >
      <p className="-mb-1">{value}</p>
    </button>
  );
}

export default CalculatorButton;
