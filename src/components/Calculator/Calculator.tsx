import { useState } from "react";
import createButtons from "../../const/const";
import Header from "../Header/Header";
import CalculatorButton from "./CalculatorButton";

function Calculator() {
  const [resultScreenValue, setResultScreenValue] = useState("");
  const [resetScreenValue, setResetScreenValue] = useState(false);
  const [disableOperand, setDisableOperand] = useState(false);
  const [totalResult, setTotalResult] = useState("");

  const convertResultRender = (text: string) => {
    const twoDecimalPlaces = Number(text).toFixed(5);
    return Number(twoDecimalPlaces).toLocaleString("en-US");
  };

  return (
    <section
      className="
      h-dvh w-full max-w-userCalculatorMaxWidth px-userCalculatorPaddingMobile py-8 md:h-screen
      lg:px-0
      "
    >
      <Header />
      <div className="mt-8 grid h-[calc(100%-32px)] grid-rows-[88px_1fr]">
        {/* RESULT SCREEN */}
        <div className="relative rounded-xl bg-userResultBg text-right text-userResultText transition-colors ">
          <p className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl font-bold">
            {convertResultRender(resultScreenValue)}
          </p>
        </div>
        {/* KEYPAD */}
        <div
          className="
          mt-6 grid max-h-[420px] w-full grid-cols-4 grid-rows-5 gap-userCalculatorGapMobile rounded-xl 
          bg-userKeypadBg p-userCalculatorPaddingMobile text-center transition-colors md:max-h-[480px]
          md:gap-userCalculatorGapDesktop md:px-userCalculatorPaddingDesktopX md:py-userCalculatorPaddingDesktopY"
        >
          {createButtons.map((x) => (
            <CalculatorButton
              value={x}
              key={x}
              resultScreenValue={resultScreenValue}
              setResultScreenValue={setResultScreenValue}
              totalResult={totalResult}
              setTotalResult={setTotalResult}
              resetScreenValue={resetScreenValue}
              setResetScreenValue={setResetScreenValue}
              disableOperand={disableOperand}
              setDisableOperand={setDisableOperand}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calculator;
