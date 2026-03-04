"use client"; //todo split into server and client

import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useTranslations } from "next-intl";

import { fonts as initialFonts, Font } from "./fonts";
import { setFont, setIsVariable } from "./labSlice";
import { RootState } from "./reducers";
import { LabState } from "./labSlice";

import { SelectButton } from "@/components/SelectButton";
import { addStyle, addStyleSheet, replaceAll } from "@/lib/utils";

let idNum = 0;
export const generateId = () => `${++idNum}`;

export const fileTypes: {
  [key: string]: string;
} = {
  ttf: "truetype",
  woff: "woff",
  woff2: "woff2",
  otf: "opentype",
} as const;

export function FontPanel() {
  const t = useTranslations("lab");
  const dispatch = useDispatch();
  const [fonts, setFonts] = useState<Array<Font>>(initialFonts);
  const labState: LabState = useSelector(
    (state: RootState) => state.labReducer,
    (prev, next) => prev.font === next.font
  );
  const { font: selectedFont } = labState;
  useEffect(() => {
    if (!selectedFont.cssURL) return;
    const removeStylesheetCallback = addStyleSheet(selectedFont.cssURL);
    return removeStylesheetCallback;
  }, [selectedFont]);

  const inputFontFile = useRef<HTMLInputElement>(null);

  const handleInputFontFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let file: globalThis.File | null = null;
    if (e.target !== null && e.target.files !== null && e.target.files.length) {
      file = e.target.files[0];
    }
    if (!file) {
      return;
    }

    const url = window.URL.createObjectURL(file);
    const family = replaceAll(file.name, /\./, "-") + "-" + generateId();
    const fileExt = String(file.name.split(".").pop());
    const fileType = fileTypes[fileExt];
    if (Object.keys(fileTypes).indexOf(fileExt) === -1) {
      alert("Wrong file type!");
      return;
    }

    addStyle(`
    @font-face {
      font-family: "${family}";
      src: url("${url}") format("${fileType}");
      font-weight: 400;
      font-style: normal;
    }
    `);

    const font: Font = {
      family: family,
      cssFamily: `"${family}"`,
      cssURL: "",
      isVariable: false,
      isLocal: true,
    };
    setFonts([...fonts, font]);
    dispatch(setFont(font));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflowX: "auto",
          maxWidth: "100%",
          pb: 1,
          px: 2,
        }}
      >
        {fonts.map((font) => (
          <SelectButton
            key={font.family}
            selected={font.family === selectedFont.family}
            variant="text"
            color="inherit"
            onClick={() => {
              dispatch(setFont(font));
              dispatch(setIsVariable(font.isVariable));
            }}
            sx={{
              whiteSpace: "nowrap",
              minWidth: "max-content",
              px: 2,
            }}
          >
            {font.isLocal ? font.family : t(font.family)}
          </SelectButton>
        ))}
        <IconButton
          color="primary"
          sx={{ mr: 1 }}
          onClick={() => {
            if (inputFontFile.current !== null) {
              inputFontFile.current.click();
            }
          }}
          size="large"
          title="Add a font"
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
      <input
        type="file"
        id="file"
        ref={inputFontFile}
        style={{ display: "none" }}
        onChange={handleInputFontFileChange}
        accept={Object.keys(fileTypes).reduce(
          (result, type) => result + `.${type},`,
          ""
        )}
      />
    </>
  );
}
