import React, { useEffect, useState } from "react";

import { InputUtils, SeparatorSymbols } from "./CurrencyInput.utils";
import { Container, StyledMoneyInput, ErrorText } from "./CurrencyInput.style";
import { KeyCode } from "../../types/KeyCode.enum";

interface Props {
  maxDecimals?: number;
  allowDecimals?: boolean;
  separatorSymbols?: SeparatorSymbols;
  prefix?: string;
  error?: { enabled?: boolean; message?: string };
}

/**
 * Transforms formatted currency input into an integer. Example: 100.000,50 -> 100000.50
 */
const CurrencyInput = ({
  maxDecimals,
  allowDecimals = true,
  separatorSymbols = { decimalSeparator: ",", integerSeparator: "." },
  error = { enabled: false, message: "" },
  prefix = "£",
}: Props) => {
  const [inputString, setInputString] = useState("");
  const [inputNumber, setInputNumber] = useState(0);

  const isMaxDecimal = (decimals?: string[], maxDecimals?: number) =>
    decimals &&
    maxDecimals &&
    decimals.length > 1 &&
    decimals[1].length > maxDecimals;

  const onInputChange = (value: string) => {
    const stringValue = InputUtils.formatMoneyInput(
      value,
      separatorSymbols,
      prefix,
      allowDecimals
    );
    const numberValue = InputUtils.formatMoneyInputToNumber(
      stringValue,
      separatorSymbols
    );
    const decimals = value.split(separatorSymbols.decimalSeparator);

    if (isMaxDecimal(decimals, maxDecimals)) return;

    setInputString(`${prefix}${stringValue}`);
    setInputNumber(numberValue);
  };

  const handleNumpadDecimal = (
    event: React.KeyboardEvent<HTMLInputElement>,
    inputMoney: string
  ) => {
    if (event.nativeEvent.code === KeyCode.NUMPAD_DECIMAL) {
      if (inputMoney.includes(separatorSymbols.decimalSeparator)) return;
      const newMoney = `${inputMoney}${separatorSymbols.decimalSeparator}`;

      setInputString(newMoney);
      setInputNumber(
        InputUtils.formatMoneyInputToNumber(newMoney, separatorSymbols)
      );
    }
  };

  useEffect(() => {
    if (prefix) setInputString(`${prefix}`);
  }, [prefix]);

  return (
    <Container>
      <StyledMoneyInput
        inputMode="decimal"
        type="string"
        value={inputString}
        onKeyUp={(e) => handleNumpadDecimal(e, inputString)}
        onKeyDown={(e) =>
          InputUtils.preventInvalidNumberInput(
            e,
            allowDecimals,
            separatorSymbols.decimalSeparator
          )
        }
        onChange={(e) => onInputChange(e.target.value)}
        $error={error?.enabled}
      />
      {error?.enabled && <ErrorText>{error?.message}</ErrorText>}
    </Container>
  );
};

export { CurrencyInput };
