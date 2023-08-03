import React, { useState } from "react";
import { StyledContainer, StyledTimePicker } from "./TimePicker.style";

export const TimePicker = () => {
  const [minutes, setMinutes] = useState(120);
  const [hours, setHours] = useState(20);
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexTime = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    const time = e.target.value;
    if (regexTime.exec(time)) {
      const minute = Number(time.substring(3, 5));
      const hour = (Number(time.substring(0, 2)) % 12) + minute / 60;

      setMinutes((360 * minute) / 60);
      setHours((360 * hour) / 12);
    }
  };

  return (
    <StyledContainer className="input-container" style={containerStyle}>
      <StyledTimePicker
        type="time"
        className="input-time"
        onInput={handleInput}
        minute={minutes}
        hour={hours}
        onFocus={() => setContainerStyle({ border: "1px solid #9495ff" })}
        onBlur={() => setContainerStyle(undefined)}
      />
    </StyledContainer>
  );
};
