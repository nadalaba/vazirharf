"use client"

import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslations } from "next-intl";

import {
  setSize,
  setWeight,
  setAlpha,
  setJustify,
  setCalt,
  setTnum,
} from "./labSlice";
import type { LabState } from "./labSlice";
import type { RootState } from "./reducers";


export function SettingsPanel() {
  const t = useTranslations("lab");
  const dispatch = useDispatch();
  const labState: LabState = useSelector(
    (state: RootState) => state.labReducer,
    (prev, next) =>
      prev.isVariable === next.isVariable &&
      prev.justify === next.justify &&
      prev.tnum === next.tnum &&
      prev.calt === next.calt &&
      prev.alpha === next.alpha &&
      prev.size === next.size &&
      prev.weight === next.weight,
  );
  const { isVariable, justify, calt, tnum, size, weight, alpha } = labState;
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        overflow: "auto",
        maxWidth: "100%",
        pb: 0.5,
        px: 2,
        pt: 2,
        mt: {
          xs: -1,
          md: -2,
        },
        gap: 2,
      }}
    >
      <Box
        sx={{ display: "flex", flexWrap: "nowrap", maxWidth: "100%", gap: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            position: "relative",
            lineHeight: 1,
            gap: 0.5,
          }}
        >
          <Box component="span">{t("size")}</Box>
          <input
            type="range"
            min="5"
            max={isSmallScreen ? "90" : "200"}
            step="1"
            value={size}
            onInput={(e) => dispatch(setSize(parseFloat(e.currentTarget.value) || 0))}
            style={{ width: "130px" }}
          />
          <Box
            component="span"
            sx={{
              position: "absolute",
              top: "-0.6rem",
              left: 1,
              fontSize: "0.7rem",
            }}
          >
            {size}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            position: "relative",
            lineHeight: 1,
            gap: 0.5,
          }}
        >
          <Box component="span">{t("weight")}</Box>
          <input
            type="range"
            min="100"
            max="900"
            step={isVariable ? "1" : "100"}
            value={weight}
            onInput={(e) => dispatch(setWeight(parseFloat(e.currentTarget.value) || 0))}
            style={{ width: "100px" }}
          />
          <Box
            component="span"
            sx={{
              position: "absolute",
              top: "-0.6rem",
              left: 1,
              fontSize: "0.7rem",
            }}
          >
            {weight}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          position: "relative",
          lineHeight: 1,
          gap: 0.5,
        }}
      >
        <Box component="span">{t("alpha")} </Box>
        <input
          type="range"
          min="10"
          max="100"
          value={alpha}
          onInput={(e) => dispatch(setAlpha(parseFloat(e.currentTarget.value) || 0))}
          style={{ width: "80px" }}
        />
      </Box>{" "}
      <Box sx={{ display: "flex", flexWrap: "nowrap", maxWidth: "100%" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={justify}
              onChange={() => dispatch(setJustify(!justify))}
            />
          }
          label={String(t("justify"))}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={calt}
              onChange={() => dispatch(setCalt(!calt))}
            />
          }
          label={String(t("calt"))}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={tnum}
              onChange={() => dispatch(setTnum(!tnum))}
              color="secondary"
            />
          }
          label={String(t("tnum"))}
        />
      </Box>
    </Box>
  );
}
