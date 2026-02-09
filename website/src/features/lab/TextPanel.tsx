"use client";

import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";

import { texts } from "./texts";
import { setText, setContentEditable } from "./labSlice";

export function TextPanel() {
  const t = useTranslations("lab");
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        overflowX: "auto",
        maxWidth: "100%",
        pb: 1,
        px: 2,
      }}
    >
      {texts.map(({ name, text }) => (
        <Button
          key={name}
          onClick={() => {
            dispatch(setText(text));
            // dispatch(
            //   setText(
            //     text
            //       .split("\n")
            //       .map((x) => `<p>${x}</p>`)
            //       .join("\n"),
            //   ),
            // );
            dispatch(setContentEditable(true));
          }}
          color="inherit"
        >
          {t(name)}
        </Button>
      ))}
    </Box>
  );
}
