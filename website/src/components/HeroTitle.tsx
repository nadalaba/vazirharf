"use client"

import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export const HeroTitle = () => {
  const t = useTranslations("index");
  const [font, setFont] = useState("vazirharf");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFont(font === "vazirharf" ? "vazirharf rd" : "vazirharf");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [font, setFont]);

  return (
    <Typography
      variant="h3"
      component="h1"
      gutterBottom
      sx={{ fontWeight: "900", mb: 1, fontFamily: font }}
    >
      {t("hero_title")}
    </Typography>
  );
};
