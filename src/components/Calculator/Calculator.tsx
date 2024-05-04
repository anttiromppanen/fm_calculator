import { useCallback, useEffect, useState } from "react";
import createButtons from "../../const/const";
import useCalculatorOperations from "../../hooks/useCalculatorOperations";
import Header from "../Header/Header";
import CalculatorButton from "./CalculatorButton";

function Calculator() {
  const [resultScreenValue, setResultScreenValue] = useState("");
  const [resetScreenValue, setResetScreenValue] = useState(false);
  const [disableOperand, setDisableOperand] = useState(false);
  const [totalResult, setTotalResult] = useState("");

  const selectCalculatorOperation = useCalculatorOperations({
    totalResult,
    setTotalResult,
    resultScreenValue,
    setResultScreenValue,
    disableOperand,
    setDisableOperand,
    resetScreenValue,
    setResetScreenValue,
  });

  const convertResultRender = (text: string) => {
    const twoDecimalPlaces = Number(text).toFixed(5);
    return Number(twoDecimalPlaces).toLocaleString("en-US");
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "Enter":
          selectCalculatorOperation("=");
          break;
        case "Backspace":
          selectCalculatorOperation("DEL");
          break;
        case "Escape":
          selectCalculatorOperation("RESET");
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          selectCalculatorOperation(event.key);
          break;
        case ".":
          selectCalculatorOperation(".");
          break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          selectCalculatorOperation(event.key);
          break;
        default:
          break;
      }
    },
    [selectCalculatorOperation], // Now this dependency is handled with useCallback
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <section
      className="
      w-full max-w-userCalculatorMaxWidth px-userCalculatorPaddingMobile py-8 lg:px-0"
    >
      <Header />
      <div className="mt-8 grid grid-rows-[88px_420px] md:grid-rows-[88px_480px]">
        {/* RESULT SCREEN */}
        <div
          className="
          relative flex items-center justify-end rounded-xl bg-userResultBg 
          px-6 text-right text-userResultText transition-colors
          "
        >
          <p className="items-center text-4xl font-bold">
            {convertResultRender(resultScreenValue)}
          </p>
        </div>
        {/* KEYPAD */}
        <div
          className="
          mt-6 grid w-full grid-cols-4 grid-rows-5 gap-userCalculatorGapMobile rounded-xl 
          bg-userKeypadBg p-userCalculatorPaddingMobile text-center transition-colors
          md:gap-userCalculatorGapDesktop md:px-userCalculatorPaddingDesktopX md:py-userCalculatorPaddingDesktopY
          "
        >
          {createButtons.map((x) => (
            <CalculatorButton
              value={x}
              key={x}
              handleClick={() => selectCalculatorOperation(x)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calculator;
