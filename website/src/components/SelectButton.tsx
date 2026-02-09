"use client";

import Button from "@mui/material/Button";
import {
  useColorScheme,
  styled,
  Theme
} from "@mui/material/styles";

export const SelectButton = styled(Button)(
  ({
    color,
    variant,
    selected,
    theme,
  }: {
    color: string;
    variant: string;
    selected: boolean;
    theme?: Theme;
  }) => {
    const { mode, systemMode } = useColorScheme();
    let backgroundColor = undefined;
    if (selected && theme) {
      if (color === "primary" || color === "secondary") {
        if (variant === "text" || variant === "outlined") {
          backgroundColor =
            mode !== "dark" && !(mode === "system" && systemMode === "dark")
              ? `color-mix(in srgb, ${theme.vars?.palette[color].main} 20%, white)` // equivalent to lighten(theme.palette[color].main, 0.8)
              : `color-mix(in srgb, ${theme.vars?.palette[color].main} 40%, black)`; // equivalent to darken(theme.palette[color].main, 0.6);
        } else {
          backgroundColor =
            mode !== "dark" && !(mode === "system" && systemMode === "dark")
              ? theme.vars?.palette[color].dark
              : `color-mix(in srgb, ${theme.vars?.palette[color].main} 40%, white)`; // equivalent to lighten(theme.palette[color].main, 0.6)
        }
      } else {
        backgroundColor = theme.vars?.palette.action.selected;
      }
    }
    return {
      backgroundColor,
      ":focus": { backgroundColor },
      ":hover": { backgroundColor },
    };
  }
);
