import React from "react";
import { Button, ButtonProps } from "@mui/material";

const BorderButton = (props) => {
  const {text, buttonColor, textColor, effectColor, style} = props;

  return (
    <Button
      {...props}
      sx={{
        ...style,
        color: textColor,
        backgroundColor: buttonColor,
        "&:focus": {
          color: "black",
          backgroundColor: effectColor,
        },
        transition: ".5s ease-in-out",
      }}
    >
      {text}
    </Button>
  );
};

export default BorderButton;
