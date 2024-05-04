import { Dispatch, SetStateAction, useCallback } from "react";
import { evaluate } from "mathjs";
import createButtons from "../const/const";

type ButtonOperationsType = (typeof createButtons)[number] | "*";

interface Props {
  totalResult: string;
  setTotalResult: Dispatch<SetStateAction<string>>;
  resultScreenValue: string;
  setResultScreenValue: Dispatch<SetStateAction<string>>;
  disableOperand: boolean;
  setDisableOperand: Dispatch<SetStateAction<boolean>>;
  resetScreenValue: boolean;
  setResetScreenValue: Dispatch<SetStateAction<boolean>>;
}

function useCalculatorOperations({
  totalResult,
  setTotalResult,
  resultScreenValue,
  setResultScreenValue,
  disableOperand,
  setDisableOperand,
  resetScreenValue,
  setResetScreenValue,
}: Props) {
  const handleSelectOperand = (state: string, operand: string) => {
    switch (operand) {
      case "+":
        return `${state} + `;
      case "-":
        return `${state} - `;
      case "x":
      case "*":
        return `${state} * `;
      case "/":
        return `${state} / `;
      default:
        return "";
    }
  };

  const selectCalculatorOperation = useCallback(
    (operation: ButtonOperationsType) => {
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

      const handleAddNumberToCalculation = (value: string) => {
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
        case "*":
        case "/":
          handleOperand(operation);
          break;
        case ".":
          handleAddComma();
          break;
        default:
          handleAddNumberToCalculation(operation);
      }
    },
    [
      resetScreenValue,
      disableOperand,
      resultScreenValue,
      totalResult,
      setDisableOperand,
      setResetScreenValue,
      setResultScreenValue,
      setTotalResult,
    ],
  );
  return selectCalculatorOperation;
}

export default useCalculatorOperations;
