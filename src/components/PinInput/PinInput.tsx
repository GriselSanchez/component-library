import React, { useState, useRef, useEffect } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import { KeyCode } from "../../types/KeyCode.enum";
import {
  PRIMARY_COLOR,
  StyledContainer,
  StyledPinInput,
} from "./PinInput.style";

const invalidCodes = [KeyCode.SLASH, KeyCode.PERIOD, KeyCode.COMMA];

// TODO:
// -Disabled state
// -Error state
// -Uncontrolled pin state

interface Props {
  /**
   * The default value of the pin input
   */
  defaultValue?: string;
  /**
   * What background color to use
   */
  color?: string;
  /**
   * How long should the pin be?
   */
  inputCount?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * If true, the input will be hidden
   */
  mask?: boolean;
  /**
   * If true, the icon will be hidden
   */
  hideIcon?: boolean;
}

/**
 * Numeric Pin Input
 */
export const PinInput = ({
  color = PRIMARY_COLOR,
  inputCount = 4,
  mask = true,
  hideIcon = false,
  defaultValue,
}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [focusPosition, setFocusPosition] = useState(0);
  const [pinValues, setPinValues] = useState<(number | undefined)[]>([]);

  const inputsRef = useRef<HTMLInputElement[]>([]);

  const setFocus = (id: number) => {
    const next = inputsRef.current[id];
    if (next) {
      next.focus();
      /* iOS bug */
      next.click();
    }
  };

  const removeValues = (position: number, value?: number) =>
    setPinValues([
      ...pinValues
        .slice(0, position)
        .concat(...[value, pinValues.slice(position + 1)]),
    ]);

  const isValidDigit = (value?: number) =>
    Number.isNaN(value) || (value && (value < 0 || value > 9));

  const onInputChange = (
    { nativeEvent: { code, key } }: React.KeyboardEvent<HTMLInputElement>,
    position: number
  ) => {
    const value = Number(key.trim());

    if (invalidCodes.some((invalidCode) => code === invalidCode)) {
      setPinValues([...pinValues]);
      return false;
    }

    switch (key) {
      case KeyCode.BACKSPACE:
        removeValues(position, undefined);
        setFocusPosition(position > 0 ? position - 1 : position);
        break;
      case KeyCode.TAB:
        setFocus(position);
        break;
      default: {
        if (isValidDigit(value)) {
          setPinValues([...pinValues]);
          return false;
        }
        removeValues(position, value);
        setFocusPosition(position + 1);
        break;
      }
    }

    return true;
  };

  useEffect(() => {
    setFocus(focusPosition);
  }, [pinValues, focusPosition]);

  useEffect(() => {
    const defaultPin =
      defaultValue
        ?.split("")
        .slice(0, inputCount)
        .map((value) => {
          const digit = Number(value);
          if (isValidDigit(digit)) return;
          return digit;
        }) || [];

    setPinValues(defaultPin);
  }, [defaultValue, inputCount]);

  useEffect(() => {
    setIsPasswordVisible(!mask);
  }, [mask]);

  const NumberInput = ({ id }: { id: number }) => (
    <StyledPinInput
      value={pinValues[id]}
      ref={(el) => {
        if (el) inputsRef.current[id] = el;
      }}
      onKeyUp={(e) => onInputChange(e, id)}
      onChange={() => setFocusPosition(id)}
      onFocus={() => setFocusPosition(id)}
      autoComplete="one-time-code"
      inputMode="numeric"
      pattern="\d*"
      $hasValue={pinValues[id] !== undefined}
      $isVisible={isPasswordVisible}
      $color={color}
    />
  );

  return (
    <StyledContainer $size={inputCount}>
      {[...Array(inputCount)].map((_, index) => (
        <div key={index}>
          <NumberInput id={index} />
        </div>
      ))}
      {!hideIcon && (
        <div>
          {isPasswordVisible ? (
            <EyeOutlined
              onClick={() => setIsPasswordVisible(false)}
              style={{ color }}
            />
          ) : (
            <EyeInvisibleOutlined
              onClick={() => setIsPasswordVisible(true)}
              style={{ color }}
            />
          )}
        </div>
      )}
    </StyledContainer>
  );
};
